import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tools = [
  {
    id: 1,
    name: "UPS Tools",
    logo: "https://www.ups.com/assets/resources/webcontent/images/ups-logo.svg",
    description:
      "Complete UPS shipping solution with rate calculation and label generation",
    features: ["Rate Calculator", "Label Printing", "Tracking"],
  },
  {
    id: 2,
    name: "FedEx Integration",
    logo: "/logo/fedex.png",
    description:
      "Comprehensive FedEx shipping tools for business and personal use",
    features: ["Multi-Package Shipping", "International", "Express"],
  },
  {
    id: 3,
    name: "USPS Manager",
    logo: "https://picsum.photos/seed/usps/200/200",
    description: "Streamlined USPS shipping management and automation tools",
    features: ["Bulk Shipping", "Priority Mail", "First Class"],
  },
  {
    id: 4,
    name: "DHL Express",
    logo: "https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg",
    description: "Global shipping solutions with DHL integration",
    features: ["Worldwide", "Express", "Customs"],
  },
];

export function PopularTools() {
  return (
    <div className="space-y-6">
      <h2
        className="text-2xl font-semibold text-white"
      >
        Carrier Integration Tools
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="custom-card hover:border-amber-500/50 transition-all duration-300 !rounded-3xl"
          >
            <div className="p-6 space-y-4">
              <div
                className="aspect-video rounded-lg overflow-hidden"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3
                className="text-lg font-semibold text-white"
              >
                {tool.name}
              </h3>
              <p className="text-sm text-gray-400">
                {tool.description}
              </p>
              <div
                className="flex flex-wrap gap-2"
              >
                {tool.features.map((feature, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-amber-500/10 text-amber-300 border-amber-500/20"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
