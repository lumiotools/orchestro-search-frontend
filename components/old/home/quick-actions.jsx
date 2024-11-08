import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart2, Package2, FileText, Globe2 } from "lucide-react";

const quickActions = [
  {
    title: "Rate Comparison",
    description: "Compare rates across carriers",
    icon: BarChart2,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Track Package",
    description: "Track your shipments",
    icon: Package2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Create Label",
    description: "Generate shipping labels",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Global Shipping",
    description: "International shipping solutions",
    icon: Globe2,
    color: "from-green-500 to-emerald-500",
  },
];

export function QuickActions() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
    >
      {quickActions.map((action, index) => (
        <div
          key={index}
          className="custom-secondary-card transition-all duration-300 cursor-pointer group rounded-xl"
        >
          <div className="p-6">
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <action.icon
                className="h-6 w-6 text-white"
              />
            </div>
            <h3
              className="text-lg font-semibold text-white mb-2"
            >
              {action.title}
            </h3>
            <p className="text-sm text-gray-400">
              {action.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
