"use client";
import { HeroSection } from "@/components/home/hero-section";
import { PopularTools } from "@/components/home/popular-tools";
import { QuickActions } from "@/components/home/quick-actions";
import { SearchSection } from "@/components/home/search-section";
import { ToolsCarousel } from "@/components/home/tools-carousel";

export default function Home() {
  return (
    <div className="space-y-12 px-8">
      <div className="relative">
        <HeroSection />
        {/* <SearchSection /> */}
      </div>
      <QuickActions />
      <ToolsCarousel title="Popular Shipping Tools" category="popular" />
      {/* <ToolsCarousel title="International Shipping" category="international" /> */}
      <PopularTools />
    </div>
  );
}
