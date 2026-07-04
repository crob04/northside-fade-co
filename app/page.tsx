import { HomeHero } from "@/components/sections/home-hero";
import { HomeProblem } from "@/components/sections/home-problem";
import { HomeWhyUs } from "@/components/sections/home-why-us";
import { HomeWhatYouGet } from "@/components/sections/home-what-you-get";
import { HomeHowItWorks } from "@/components/sections/home-how-it-works";
import { HomeProof } from "@/components/sections/home-proof";
import { HomeFaq } from "@/components/sections/home-faq";
import { HomeFinalCta } from "@/components/sections/home-final-cta";

/**
 * Home page — the canonical 8-section landing per VISUAL_SPEC §D.1.
 * Order is binding: HERO → THE PROBLEM → WHY US → WHAT YOU GET →
 * HOW IT WORKS → PROOF → FAQ → FINAL CTA (F-07).
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblem />
      <HomeWhyUs />
      <HomeWhatYouGet />
      <HomeHowItWorks />
      <HomeProof />
      <HomeFaq />
      <HomeFinalCta />
    </>
  );
}
