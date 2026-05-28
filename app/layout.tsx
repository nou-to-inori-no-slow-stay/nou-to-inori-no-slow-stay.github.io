import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "農と祈りのリトリート | 水のサジタリオ",
  description:
    "射水市水戸田・青井谷を舞台に、水・土・火・香りに還る2泊3日の農泊ウェルネスリトリート。",
  openGraph: {
    title: "農と祈りのリトリート | 水のサジタリオ",
    description:
      "自然栽培の食、田んぼの土の器、焚火、バラ、へちま、地元の人との語らいを味わう農泊ウェルネスツアー。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
