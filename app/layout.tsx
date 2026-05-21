import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "水のサジタリオ | 射水の大地と清流が生む、一矢の潤い。",
  description:
    "射水の水を射る大地、スローフードの思想、射手座の神話を束ねた自然栽培ブランド。家族の食卓へ、まっすぐな未来を届けます。",
  openGraph: {
    title: "水のサジタリオ | 射水の大地と清流が生む、一矢の潤い。",
    description:
      "射水の水、星と土の知恵、そして古の祈りを今の食卓へ。水のサジタリオの世界観を伝えるブランドサイト。",
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
      <head>
        <meta content="no-cache, no-store, must-revalidate" httpEquiv="Cache-Control" />
        <meta content="no-cache" httpEquiv="Pragma" />
        <meta content="0" httpEquiv="Expires" />
      </head>
      <body>{children}</body>
    </html>
  );
}
