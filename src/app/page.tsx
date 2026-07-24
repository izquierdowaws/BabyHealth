"use client";

import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import ProductReveal from "@/components/ProductReveal";
import Workflow from "@/components/Workflow";
import WhyBabyHealth from "@/components/WhyBabyHealth";
import Metrics from "@/components/Metrics";
import AWSArchitecture from "@/components/AWSArchitecture";
import SecurityAndVision from "@/components/SecurityAndVision";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <main className="flex flex-col min-h-screen overflow-x-hidden">
        <Hero />
        <ProductReveal />
        <Workflow />
        <WhyBabyHealth />
        <Metrics />
        <AWSArchitecture />
        <SecurityAndVision />
        <FinalCTA />
      </main>
    </SmoothScroll>
  );
}
