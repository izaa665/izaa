import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Azizahwati Mutmainnah | Portofolio - Web, Mobile & UI/UX Developer",
  description: "Portofolio premium Azizahwati Mutmainnah, Web Developer, Mobile Developer, UI/UX Designer, dan AI Enthusiast. Temukan antarmuka modern yang fungsional dan estetis.",
};

export const viewport = {
  width: 1024,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-[#332125] bg-gradient-to-br from-[#fffcfd] via-[#fff0f2] to-[#ffeef1] min-h-screen">
        {children}
      </body>
    </html>
  );
}
