import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getYearsOfExperience } from "@/constants/experience";
import { OG_IMAGE } from "@/lib/metadata";

export const alt = OG_IMAGE.alt;
export const size = { width: OG_IMAGE.width, height: OG_IMAGE.height };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/profile-photo.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  // Fondo plano y foto de 400px a propósito: con degradados el PNG pasa los ~300 KB
  // y WhatsApp deja de mostrar la vista previa.
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0b0f1a",
          color: "#eceeff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 80,
            width: 720,
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#4f8ef7", marginBottom: 28 }}>
            EDILOAZ.COM
          </div>
          <div style={{ fontSize: 80, lineHeight: 1.05, marginBottom: 18 }}>Edisson López</div>
          <div style={{ fontSize: 38, color: "#4f8ef7", marginBottom: 36 }}>
            Desarrollador Full Stack Senior
          </div>
          <div style={{ fontSize: 26, color: "#c3c9da", marginBottom: 14 }}>
            React · Next.js · TypeScript · C#/.NET · AWS
          </div>
          <div style={{ fontSize: 24, color: "#7a8499" }}>
            {`${getYearsOfExperience()}+ años de experiencia · Costa Rica · Remoto`}
          </div>
        </div>
        <img
          src={photoSrc}
          alt=""
          width={400}
          height={499}
          style={{ position: "absolute", right: 30, bottom: 0 }}
        />
      </div>
    ),
    size,
  );
}
