import Navbar from "@/app/sections/Navbar";
import Hero from "@/app/sections/Hero";
import WhatIsIncluded from "@/app/sections/WhatIsIncluded";
import AppShowcase from "@/app/sections/AppShowcase";
import Features from "@/app/sections/Features";
import HowItWorks from "@/app/sections/HowItWorks";
import PerfectFor from "@/app/sections/PerfectFor";
import Pricing from "@/app/sections/Pricing";
import Screenshots from "@/app/sections/Screenshots";
import LeadForm from "@/app/sections/LeadForm";
import Footer from "@/app/sections/Footer";
import FloatingCTA from "@/app/components/ui/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsIncluded />
        <AppShowcase />
        <Features />
        <HowItWorks />
        <PerfectFor />
        <Pricing />
        <Screenshots />
        <LeadForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
