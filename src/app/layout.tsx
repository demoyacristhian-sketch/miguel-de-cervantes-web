import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipLink } from "@/components/layout/SkipLink";
import "./globals.css";

const editorial = Playfair_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Sin dominio de producción todavía (no existe proyecto Vercel, ver docs/DEPLOYMENT.md).
// Usar NEXT_PUBLIC_SITE_URL cuando exista un Preview/Producción real.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Miguel de Cervantes — El universo de Cervantes",
    template: "%s — Miguel de Cervantes",
  },
  description:
    "Plataforma editorial e histórica sobre la vida, la obra, el mundo y el legado de Miguel de Cervantes Saavedra.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Miguel de Cervantes",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${editorial.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <SkipLink />
        <SiteHeader />
        <main id="contenido-principal" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
