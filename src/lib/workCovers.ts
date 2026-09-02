interface WorkCover {
  src: string;
  alt: string;
  credit: string;
  second?: { src: string; alt: string; credit: string };
}

/** Portadas de primera edición por obra (dominio público, ver public/media/manifest.json). */
export const WORK_COVERS: Record<string, WorkCover> = {
  "la-galatea": {
    src: "/media/vida-en-movimiento/galatea-1585-portada.jpg",
    alt: "Portada de la primera edición de La Galatea (1585)",
    credit: "Primera edición, Alcalá, 1585",
  },
  "don-quijote-de-la-mancha": {
    src: "/media/vida-en-movimiento/quijote-1605-portada.jpg",
    alt: "Portada de la primera edición de El ingenioso hidalgo don Quijote de la Mancha (1605)",
    credit: "Primera parte, Madrid, 1605",
    second: {
      src: "/media/obras/quijote-1615-segunda-parte-portada.jpg",
      alt: "Portada de la primera edición de la Segunda parte del ingenioso caballero don Quijote de la Mancha (1615)",
      credit: "Segunda parte, Madrid, 1615",
    },
  },
  "novelas-ejemplares": {
    src: "/media/obras/novelas-ejemplares-1613-portada.png",
    alt: "Portada de la primera edición de las Novelas exemplares (1613)",
    credit: "Primera edición, Madrid, 1613",
  },
  "viaje-del-parnaso": {
    src: "/media/obras/viaje-del-parnaso-1614-portada.jpg",
    alt: "Portada de la primera edición del Viage del Parnaso (1614)",
    credit: "Primera edición, Madrid, 1614",
  },
  "ocho-comedias-y-ocho-entremeses": {
    src: "/media/obras/ocho-comedias-1615-portada.jpg",
    alt: "Portada de la primera edición de Ocho comedias y ocho entremeses nuevos, nunca representados (1615)",
    credit: "Primera edición, Madrid, 1615",
  },
  "los-trabajos-de-persiles-y-sigismunda": {
    src: "/media/obras/persiles-1617-portada.png",
    alt: "Portada de la primera edición de Los trabajos de Persiles y Sigismunda (1617)",
    credit: "Primera edición póstuma, Madrid, 1617",
  },
};
