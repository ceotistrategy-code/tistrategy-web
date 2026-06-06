import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TISTRATEGY S.A. | Desarrollo de Apps, Software e Inteligencia Artificial",
  description:
    "Desarrollamos aplicaciones móviles, plataformas web, software empresarial, soluciones SaaS e inteligencia artificial para startups, pymes y grandes empresas.",
  keywords: [
    "Desarrollo de software",
    "Desarrollo de apps",
    "Desarrollo web",
    "Inteligencia artificial",
    "SaaS",
    "Software empresarial",
    "Ecuador",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
