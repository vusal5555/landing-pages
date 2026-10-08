import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThankYouContent from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Demo Booking Confirmed",
  description:
    "Prepare for your Novra AI hotel enquiry workflow demonstration.",
  robots: {
    index: false,
    follow: false,
  },
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
