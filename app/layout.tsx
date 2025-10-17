import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Punarv Pawade | Software Engineer & AI/Web3 Integrations",
  description: "Software Engineer with 2+ years in full-stack, AI tooling (agents, RAG), and Web3 integrations. Specialized in Golang, React, and scalable systems.",
  keywords: ["Software Engineer", "Full-stack Developer", "AI", "AI Agents", "RAG", "LangGraph", "LangChain", "Web3 Integrations", "Golang", "ReactJS", "NextJS", "Ethereum", "Aptos", "dApp Integrations", "Open Source", "Punarv Pawade"],
  authors: [{ name: "Punarv Pawade" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Punarv Pawade | Software Engineer & AI/Web3 Integrations",
    description: "Software Engineer with 2+ years in full-stack, AI agents/workflows, and Web3 integrations.",
    url: "https://www.punarv.dev/",
    siteName: "Punarv Pawade Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punarv Pawade | Software Engineer & AI/Web3 Integrations",
    description: "Software Engineer with 2+ years in full-stack, AI agents/workflows, and Web3 integrations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased gradient-bg min-h-screen`}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
