import type { Metadata, Viewport } from "next";
import { Inter, Sora, Unbounded, Golos_Text, Martian_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

// Patch 0 (DESIGN-BRIEF.md): three new roles — display / body / utility.
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const golosText = Golos_Text({
  variable: "--font-golos",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Evgenii Tolstikov — AI Product Developer",
  description:
    "AI Product Developer: внутренние AI-платформы, аналитические продукты, дашборды, веб-приложения и MVP.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Evgenii Tolstikov — AI Product Developer",
    description:
      "AI Product Developer: внутренние AI-платформы, аналитические продукты, дашборды, веб-приложения и MVP.",
    type: "website",
    locale: "ru_RU",
    url: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${sora.variable} ${unbounded.variable} ${golosText.variable} ${martianMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
