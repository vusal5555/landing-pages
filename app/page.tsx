import type { Metadata } from "next";
import NovraHomePage from "@/components/NovraHomePage";

export const metadata: Metadata = {
  title: "NovraAI | AI Systems That Save Time and Make Money",
  description:
    "NovraAI is Vusal Novruzov's one-person AI engineering studio. Custom AI systems for businesses that need to automate manual work, save time, and cut support load.",
  openGraph: {
    title: "NovraAI | AI Systems That Save Time and Make Money",
    description:
      "Custom production AI systems by Vusal Novruzov. Built to remove bottlenecks, save hours, and move real business numbers.",
    url: "https://novraai.dev",
    siteName: "NovraAI",
    type: "website",
  },
  alternates: {
    canonical: "https://novraai.dev",
  },
};

export default function Home() {
  return <NovraHomePage />;
}
