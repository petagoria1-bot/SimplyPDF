import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HEXAOS PDF",
    short_name: "HEXAOS PDF",
    description:
      "Outils PDF gratuits, privés et rapides pour fusionner, diviser, compresser et convertir vos documents.",
    start_url: "/pdf/",
    display: "standalone",
    background_color: "#07101f",
    theme_color: "#1268f4",
    icons: [
      {
        src: "/pdf/hexaos-pdf-icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  };
}
