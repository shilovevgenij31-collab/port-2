import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Evgenii Tolstikov — AI Product Developer",
    short_name: "Evgenii Tolstikov",
    description:
      "AI Product Developer: внутренние AI-платформы, аналитические продукты, дашборды, веб-приложения и MVP.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
