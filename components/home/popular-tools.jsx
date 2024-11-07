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
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAbCAMAAAAeYLy0AAAAnFBMVEX///8+AIXSyd89CpHaVzz/ZwBNFIz/XQD/WQBLDotDAIf/ZADCt9T/ybU2AIE6AIP/wKvk4Oz/9/SsnsX/5+Cypcm4rM1YK5L/rI9aL5P/VAD/uKDt6vLNxNze2ejwxL1uT54uAIvYTCyNd7FmQpn/SgD/l2//fEN7X6aXhLj/oX7/ci7/eDtTIo+ejLz/jWH/bB//3dNfOJb/0cOYCLkbAAABRElEQVQ4je2S3XbCIBCEoa38LCkhCUFNMKZV22jVmvj+71ag2qM2eu2Fc8ECh+8wO4DQQ3coGwVNzjarKJq+Bl0HnyR2iuuzzUy+vVMvdgPEhMexvADh+WUwYE63QD60SZL8B1mrtb4JjsMkybPIV2vyJA9g6lZp6sdj6bFqZlLKGFcokjiWc36wSkcLJlL0URSfPSABgCGASRqASnJY1kA86NNBKya+Rkys+8LZRMYAH5t8C5xw7F6m8zfSUimF0DcVVOyu9igJeK8xEOlWS99jcTixFr/t9qTqCobGJtbaBmIXcBPC0SHVPRNCrPxR3faAM4CJ3c67DPNukmHy945tIcROsJHjSrU/BSUmvm5cmFhuUYMBO9+Hn0N1QYs2ZXRRIq32p6DNjQmTrO4a/2OzbphVxkzVUc6gVqpML6w+dBf6AbhjGOjXqfYGAAAAAElFTkSuQmCC",
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {tools.map((tool) => (
          <Card
            key={tool.id}
            className="bg-black/50 border border-white/10 hover:border-amber-500/50 transition-all duration-300"
          >
            <CardContent className="p-6 space-y-4">
              <div
                className="aspect-square rounded-lg overflow-hidden"
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
