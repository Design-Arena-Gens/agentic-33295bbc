import type { Metadata } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const font = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-noto-devanagari",
});

export const metadata: Metadata = {
  title: "बिल्ला और चीता - साहसिक गाथा",
  description:
    "एक इंटरऐक्टिव कथा जहां बिल्ला चीते को बचाने के लिए खतरों का सामना करता है।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={font.variable}>
      <body className={font.className}>{children}</body>
    </html>
  );
}
