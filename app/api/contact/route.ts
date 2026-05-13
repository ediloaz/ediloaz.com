import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail } from "@/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body as {
    name: string;
    email: string;
    message: string;
  };

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Todos los campos son requeridos." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "El email no es válido." },
      { status: 400 }
    );
  }

  const { data, error } = await resend.emails.send({
    from: "Contacto ediloaz.com <contact@ediloaz.com>",
    to: "ediloaz@gmail.com",
    replyTo: email,
    subject: `Nuevo mensaje de ${name} — ediloaz.com`,
    react: ContactEmail({ name, email, message }),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Intenta de nuevo." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, id: data?.id });
}
