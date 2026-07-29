import type { Metadata } from "next";
import { Ripple } from "@/components/canvasui/Ripple";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mertz-hands-warm.mertzhands.chatgpt.site"),
  title: "Mertz Hands — Music instruction & creative direction",
  description:
    "Vocal and piano instruction, music theory, manuscript creation, and music direction shaped around your goals.",
  openGraph: {
    title: "Mertz Hands — How may we help you?",
    description:
      "Vocal and piano instruction, music theory, manuscript creation, and music direction shaped around your goals.",
    type: "website",
    images: [{ url: "/hero-piano-v7.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mertz Hands — How may we help you?",
    description:
      "Music instruction and creative direction shaped around your goals.",
    images: ["/hero-piano-v7.png"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem("mertzhands-theme");var theme=saved==="light"||saved==="dark"?saved:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <Ripple
          className="canvas-ui-ripple-shell"
          amplitude={0.7}
          speed={0.58}
          wavelength={72}
          rings={4}
          decay={0.85}
          refraction={95}
          dispersion={0.35}
          shine={0.8}
          trigger="click"
        >
          {children}
        </Ripple>
      </body>
    </html>
  );
}
