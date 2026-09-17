import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Honeypot field.
    // Real users never see or fill this field.
    const website = String(body.website ?? "").trim();

    // Silently reject bots that fill the honeypot.
    if (website) {
      return Response.json(
        {
          success: true,
        },
        {
          status: 200,
        },
      );
    }

    // Required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          error: "All fields are required.",
        },
        {
          status: 400,
        },
      );
    }

    // Length limits
    if (name.length > 100) {
      return Response.json(
        {
          error: "Name is too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (email.length > 254) {
      return Response.json(
        {
          error: "Email address is too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (subject.length > 200) {
      return Response.json(
        {
          error: "Subject is too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (message.length > 5000) {
      return Response.json(
        {
          error: "Message is too long.",
        },
        {
          status: 400,
        },
      );
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        {
          error: "Please provide a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["edrienecabanela@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Message</h2>

          <p>
            <strong>Name:</strong><br />
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Subject:</strong><br />
            ${escapeHtml(subject)}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${escapeHtml(message).replace(/\n/g, "<br />")}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error: "Failed to send message.",
        },
        {
          status: 500,
        },
      );
    }

    return Response.json(
      {
        success: true,
        id: data?.id,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}