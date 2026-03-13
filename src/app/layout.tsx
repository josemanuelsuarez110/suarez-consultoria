import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SUAREZ SERVICIOS Y ASESORÍA | Ciberseguridad e ISO 27001",
  description: "Consultoría integral en ciberseguridad, infraestructura de redes e implementación de ISO 27001. Protegemos y fortalecemos su infraestructura tecnológica.",
  keywords: ["ciberseguridad", "ISO 27001", "redes", "ethical hacking", "pentesting", "consultoría técnica"],
  authors: [{ name: "Suarez Servicios y Asesoría" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
