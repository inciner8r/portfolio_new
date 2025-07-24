import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Punarv Pawade | Software Engineer & Blockchain Developer",
  description: "Software Engineer with 2+ years of experience in full-stack development and blockchain technologies. Specialized in Golang, React, and Web3 development.",
  keywords: ["Software Engineer", "Full-stack Developer", "Blockchain Developer", "Golang", "ReactJS", "NextJS", "Ethereum", "Aptos", "Web3", "Smart Contract", "Open Source", "Punarv Pawade"],
  authors: [{ name: "Punarv Pawade" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Punarv Pawade | Software Engineer & Blockchain Developer",
    description: "Software Engineer with 2+ years of experience in full-stack development and blockchain technologies.",
    url: "https://www.punarv.dev/",
    siteName: "Punarv Pawade Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punarv Pawade | Software Engineer & Blockchain Developer",
    description: "Software Engineer with 2+ years of experience in full-stack development and blockchain technologies.",
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
        {children}
      </body>
    </html>
  );
}
