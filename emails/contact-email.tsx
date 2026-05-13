import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html lang="es">
      <Head />
      <Preview>Nuevo mensaje de {name} desde ediloaz.com</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>ediloaz.com</Heading>
          </Section>

          <Section style={content}>
            <Heading as="h2" style={title}>
              Nuevo mensaje de contacto
            </Heading>

            <Section style={infoBox}>
              <Text style={label}>De</Text>
              <Text style={value}>{name}</Text>
              <Text style={label}>Email</Text>
              <Link href={`mailto:${email}`} style={emailLink}>
                {email}
              </Link>
            </Section>

            <Hr style={divider} />

            <Text style={label}>Mensaje</Text>
            <Text style={messageText}>{message}</Text>

            <Hr style={divider} />

            <Section style={replySection}>
              <Text style={replyText}>
                Responder directamente a:{" "}
                <Link href={`mailto:${email}`} style={emailLink}>
                  {email}
                </Link>
              </Text>
            </Section>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Mensaje enviado desde{" "}
              <Link href="https://www.ediloaz.com/contact" style={footerLink}>
                ediloaz.com/contact
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f4f4f5",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const container = {
  maxWidth: "580px",
  margin: "40px auto",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  overflow: "hidden" as const,
  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
};

const header = {
  background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
  padding: "32px 40px",
};

const headerTitle = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "700",
  margin: "0",
};

const content = {
  padding: "40px",
};

const title = {
  color: "#18181b",
  fontSize: "20px",
  fontWeight: "600",
  marginTop: "0",
  marginBottom: "24px",
};

const infoBox = {
  backgroundColor: "#f4f4f5",
  borderRadius: "8px",
  padding: "16px 20px",
  marginBottom: "24px",
};

const label = {
  color: "#71717a",
  fontSize: "11px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  margin: "0 0 4px",
};

const value = {
  color: "#18181b",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0 0 16px",
};

const emailLink = {
  color: "#2563eb",
  fontSize: "16px",
  fontWeight: "500",
  textDecoration: "none",
  display: "block" as const,
  marginBottom: "0",
};

const divider = {
  borderColor: "#e4e4e7",
  margin: "24px 0",
};

const messageText = {
  color: "#3f3f46",
  fontSize: "15px",
  lineHeight: "1.7",
  margin: "8px 0 0",
  whiteSpace: "pre-wrap" as const,
};

const replySection = {
  backgroundColor: "#eff6ff",
  borderRadius: "8px",
  padding: "16px 20px",
};

const replyText = {
  color: "#3f3f46",
  fontSize: "14px",
  margin: "0",
};

const footer = {
  backgroundColor: "#f4f4f5",
  padding: "20px 40px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#a1a1aa",
  fontSize: "12px",
  margin: "0",
};

const footerLink = {
  color: "#2563eb",
  textDecoration: "none",
};
