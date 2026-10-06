import type { Metadata, Viewport } from "next";
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
  title: "Pooja Panjwani | Data Engineer & GenAI Developer",
  description:
    "Portfolio of Pooja Panjwani, a Data Engineer building AI agents, GenAI applications, data platforms and cloud-based automation systems.",
  keywords: [
    "Pooja Panjwani",
    "Data Engineer",
    "GenAI Developer",
    "AI Agents",
    "LangGraph",
    "AWS",
    "PySpark",
    "Python",
    "FastAPI",
    "Data Quality",
    "Go Digital Technology Consulting",
  ],
  authors: [{ name: "Pooja Panjwani" }],
  creator: "Pooja Panjwani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://poojapanjwani.dev",
    title: "Pooja Panjwani | Data Engineer & GenAI Developer",
    description:
      "Portfolio of Pooja Panjwani, a Data Engineer building AI agents, GenAI applications, data platforms and cloud-based automation systems.",
    siteName: "Pooja Panjwani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pooja Panjwani | Data Engineer & GenAI Developer",
    description:
      "Portfolio of Pooja Panjwani, a Data Engineer building AI agents, GenAI applications, data platforms and cloud-based automation systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#060709",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#060709] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
