import nodemailer from "nodemailer";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(1, "Full name is required!").max(100, "Name too long"),
  email: z.string().email({ message: "Email is invalid!" }).max(254, "Email too long"),
  message: z.string().min(1, "Message is required!").max(5000, "Message too long"),
});

// Sanitize HTML to prevent XSS
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    
    if (!zodSuccess) {
      return Response.json({ error: zodError.errors[0]?.message || "Validation failed" }, { status: 400 });
    }

    // Check if env variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return Response.json({ error: "Email configuration missing" }, { status: 500 });
    }

    // Sanitize user inputs
    const safeName = escapeHtml(zodData.fullName);
    const safeEmail = escapeHtml(zodData.email);
    const safeMessage = escapeHtml(zodData.message);
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "komalsonar19@gmail.com ",
      subject: `Portfolio Contact from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: zodData.email,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
