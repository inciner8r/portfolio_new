import type { Metadata, Viewport } from "next";
import { Barlow, Big_Shoulders } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "Punarv Pawade | Full-stack & AI Engineer";
const description =
  "Full-stack engineer building production AI systems, multi-tenant SaaS, cloud telephony and the infrastructure under them.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.punarv.dev"),
  title,
  description,
  keywords: [
    "Punarv Pawade",
    "Full-stack Engineer",
    "AI Engineer",
    "MCP",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "LLM",
  ],
  authors: [{ name: "Punarv Pawade" }],
  openGraph: {
    title,
    description,
    url: "https://www.punarv.dev/",
    siteName: "Punarv Pawade",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1923",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
