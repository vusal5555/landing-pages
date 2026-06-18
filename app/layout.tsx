import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novraai.dev"),
  title: "NovraAI | AI Engineering Studio",
  description:
    "A one-person AI engineering studio building production systems that help businesses automate manual work, save time, and make more money.",
  openGraph: {
    title: "NovraAI | AI Engineering Studio",
    description:
      "Production AI systems by Vusal Novruzov for businesses that need to remove bottlenecks and move real numbers.",
    url: "https://novraai.dev",
    siteName: "NovraAI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
