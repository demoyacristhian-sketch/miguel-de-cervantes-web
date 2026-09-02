import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // /cervantes y /linea-de-tiempo se fusionaron en /vida-en-movimiento.
    // Estuvieron brevemente en producción, de ahí el redirect permanente.
    return [
      { source: "/cervantes", destination: "/vida-en-movimiento", permanent: true },
      { source: "/linea-de-tiempo", destination: "/vida-en-movimiento", permanent: true },
    ];
  },
};

export default nextConfig;
