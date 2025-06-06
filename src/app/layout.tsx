import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";
import Stones from "@/components/Stones";

const baunk = localFont({
  src: "./fonts/Baunk.ttf",
  variable: "--font-baunk",
  display: "swap",
});

const notoSansTc = Noto_Sans_TC({
  weight: ["400", "500", "700"], // 可選: 100–900
  subsets: ["latin"], // Google Fonts 沒有提供 traditional-chinese subset，選 'latin' 即可生效
  variable: "--font-noto-sans-tc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenHCI 2025",
  description: "OpenHCI 2025",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OpenHCI 2025",
    url: "https://2025.openhci.com",
  };

  return (
    <html lang="zh-Hant">
      <body
        className={`${baunk.variable} ${notoSansTc.variable} antialiased relative overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Stones />
        {children}
      </body>
    </html>
  );
}
