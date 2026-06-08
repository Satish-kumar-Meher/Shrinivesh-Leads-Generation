import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { LeadModalProvider } from "@/components/lead/LeadModalContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { PortfolioSection } from "@/components/PortfolioSection";
import { RecommendationSection } from "@/components/RecommendationSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Manifesto } from "@/components/Manifesto";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { LeadModal } from "@/components/LeadModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShriNivesh — See Our 2025–2030 Fund Picks Free" },
      { name: "description", content: "SEBI Registered Research Analyst reveals 3 mutual funds for 2025–2030 wealth creation. Model portfolio: ₹10K/month SIP grew ₹6L to ₹11.4L in 5 years." },
      { property: "og:title", content: "ShriNivesh — See Our 2025–2030 Fund Picks Free" },
      { property: "og:description", content: "SEBI Registered Research Analyst reveals 3 mutual funds for 2025–2030 wealth creation." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    document.body.classList.add("shrinivesh");
    return () => { document.body.classList.remove("shrinivesh"); };
  }, []);

  return (
    <LeadModalProvider>
      <Navbar />
      <Hero />
      <TrustBar />
      <PortfolioSection />
      <RecommendationSection />
      <ProcessSection />
      <WhyUs />
      <Testimonials />
      <Manifesto />
      <CTASection />
      <Footer />
      <LeadModal />
    </LeadModalProvider>
  );
}
