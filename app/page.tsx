import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import VerticalPage from "@/components/VerticalPage";
import Footer from "@/components/Footer";
import { verticals } from "@/data/verticals";

const data = verticals.compliance;

export const metadata: Metadata = {
  title: "NovraAI — Research Ops for Professional Firms",
  description:
    "Custom RAG research systems for regulated professional firms. Cited answers from your documents in 8 seconds. $5,000 build + $800/month. Built by the engineer who shipped HeyData.",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <VerticalPage data={data} />
      </main>
      <Footer />
    </>
  );
}
