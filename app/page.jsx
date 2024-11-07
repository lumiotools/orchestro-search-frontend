"use client"
import { HeroSection } from "@/components/hero-section";
import { PopularTools } from "@/components/popular-tools";
import { QuickActions } from "@/components/quick-actions";
import { SearchSection } from "@/components/search-section";
import { ToolsCarousel } from "@/components/tools-carousel";

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="relative">
        <HeroSection />
        <SearchSection />
      </div>
      <QuickActions />
      <ToolsCarousel
        title="Popular Shipping Tools"
        category="popular"
      />
      <ToolsCarousel
        title="International Shipping"
        category="international"
      />
      <PopularTools />
    </div>
  );
}
