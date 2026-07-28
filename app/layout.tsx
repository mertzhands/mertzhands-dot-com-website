import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mertz-hands-warm.mertzhands.chatgpt.site"),
  title: "Mertz Hands — Thoughtful things, made well",
  description:
    "A warm independent creative practice for sound, stories, identity, and digital work.",
  openGraph: {
    title: "Mertz Hands — Thoughtful things, made well",
    description:
      "Sound, stories, identities, and digital experiences shaped with curiosity and warmth.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mertz Hands — Thoughtful things, made well",
    description:
      "A warm independent creative practice for sound, stories, identity, and digital work.",
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
