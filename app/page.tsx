import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import SourceLinkingDemo from "@/components/SourceLinkingDemo";
import Industries from "@/components/Industries";
import CaseStudy from "@/components/CaseStudy";
import TrustStack from "@/components/TrustStack";
import CTABooking from "@/components/CTABooking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <SourceLinkingDemo />
        <Industries />
        <CaseStudy />
        <TrustStack />
        <CTABooking />
      </main>
      <Footer />
    </>
  );
}
