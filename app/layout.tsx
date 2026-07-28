import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mertz-hands-warm.mertzhands.chatgpt.site"),
  title: "Mertz Hands — Music instruction & creative direction",
  description:
    "Vocal and piano instruction, music theory, manuscript creation, and music direction shaped around your goals.",
  openGraph: {
    title: "Mertz Hands — Thoughtful things, made well",
    description:
      "Vocal and piano instruction, music theory, manuscript creation, and music direction shaped around your goals.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mertz Hands — Thoughtful things, made well",
    description:
      "Music instruction and creative direction shaped around your goals.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
