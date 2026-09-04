import type { NextConfig } from "next";

/**
 * Content-Security-Policy — ver docs/SECURITY.md ("Cabeceras de seguridad HTTP") para la
 * justificación completa de cada directiva. El patrón oficial de Next.js para `script-src` con
 * nonce por petición (https://nextjs.org/docs/app/guides/content-security-policy) exige leer el
 * nonce vía `headers()` en un Server Component, lo que fuerza renderizado dinámico en toda ruta que
 * lo use — incompatible con la arquitectura 100% estática de este sitio (páginas prerenderizadas en
 * build time, ver ADR-003). Probado y descartado: con un nonce por petición pero HTML fijo
 * generado una sola vez, el nonce del header nunca coincide con el de los scripts de hidratación
 * que Next.js inyecta en el HTML ya generado, y el navegador los bloquea (rompe la app). Por eso
 * `script-src` usa `'unsafe-inline'` en producción, con el mismo criterio ya aplicado a `style-src`:
 * es una concesión intrínseca a la hidratación de Next.js/React (no a código propio), y el riesgo
 * real es bajo porque el sitio no tiene rutas de API, formularios, cookies, `dangerouslySetInnerHTML`
 * ni entrada de usuario reflejada en el HTML — no hay vector para que un atacante inyecte su propio
 * script inline. `'unsafe-eval'` se añade solo en desarrollo (lo exige el Fast Refresh).
 */
function buildCsp(isDev: boolean): string {
  const scriptSrc = isDev ? "'self' 'unsafe-eval' 'unsafe-inline'" : "'self' 'unsafe-inline'";
  return [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'" + (isDev ? " ws:" : ""),
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

const securityHeaders = [
  { key: "Content-Security-Policy", value: buildCsp(process.env.NODE_ENV !== "production") },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    // /cervantes y /linea-de-tiempo se fusionaron en /vida-en-movimiento.
    // /curiosidades se fusionó en /legado#curiosidades.
    // Estuvieron brevemente en producción, de ahí el redirect permanente.
    return [
      { source: "/cervantes", destination: "/vida-en-movimiento", permanent: true },
      { source: "/linea-de-tiempo", destination: "/vida-en-movimiento", permanent: true },
      { source: "/curiosidades", destination: "/legado#curiosidades", permanent: true },
    ];
  },
};

export default nextConfig;
