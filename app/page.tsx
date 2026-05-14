import Navbar from "@/app/sections/Navbar";
import Hero from "@/app/sections/Hero";
import Features from "@/app/sections/Features";
import HowItWorks from "@/app/sections/HowItWorks";
import Pricing from "@/app/sections/Pricing";
import Screenshots from "@/app/sections/Screenshots";
import LeadForm from "@/app/sections/LeadForm";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Screenshots />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
