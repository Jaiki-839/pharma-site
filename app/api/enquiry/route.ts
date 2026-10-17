import { NextRequest, NextResponse } from "next/server";

// Server-side handler for the enquiry form.
// This does not send email/SMS/CRM notifications on its own — it is a clean
// integration point. Wire it up to an email provider, CRM, or notification
// service once one is chosen, using process.env for any secret keys
// (never expose them to the client).

export async function POST(request: NextRequest) {
  const endpoint = process.env.ENQUIRY_FORM_ENDPOINT;

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const required = ["name", "phone", "requirement"];
  const missing = required.filter((field) => !body[field]?.trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required field(s): ${missing.join(", ")}` },
      { status: 422 }
    );
  }

  if (!endpoint) {
    // No backend/email provider has been configured yet.
    // Do not pretend the enquiry was sent — tell the truth.
    return NextResponse.json(
      {
        error:
          "The enquiry form is not yet connected to an email or CRM provider. Please call or WhatsApp us directly for now.",
      },
      { status: 501 }
    );
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "The enquiry could not be delivered. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "The enquiry could not be delivered. Please try again shortly." },
      { status: 502 }
    );
  }
}
