import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThankYouContent from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "You're Almost There — NovraAI",
  description:
    "Complete these steps before your NovraAI discovery call so we can make the most of our time together.",
};

export default function ThankYouPage() {
  return (
    <>
      <Navigation />
      <main>
        <ThankYouContent />
      </main>
      <Footer />
    </>
  );
}
