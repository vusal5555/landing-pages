import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import VerticalPage from "@/components/VerticalPage";
import Footer from "@/components/Footer";
import { verticals } from "@/data/verticals";

const data = verticals.immigration;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function ImmigrationPage() {
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
