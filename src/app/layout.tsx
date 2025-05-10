import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body
        className={`${baunk.variable} ${notoSansTc.variable}  antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
