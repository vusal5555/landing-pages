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
  title: {
    default: "Novra AI | Hotel Enquiry & Revenue Recovery",
    template: "%s | Novra AI",
  },
  description:
    "AI-powered hotel enquiry processing, follow-up workflows, and revenue recovery support for hospitality teams.",
  openGraph: {
    title: "Novra AI | Hotel Enquiry & Revenue Recovery",
    description:
      "Turn more existing hotel enquiries into booked revenue with configured AI-powered workflows.",
    url: "https://novraai.dev",
    siteName: "Novra AI",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
      data-scroll-behavior="smooth"
      className={`${instrumentSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
