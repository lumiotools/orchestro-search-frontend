import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

const tools = {
  popular: [
    {
      id: 1,
      title: "Cost to Serve Analysis",
      description: "analyse coast",
      icon: "📊",
      color: "from-amber-500 to-yellow-500",
      link:"https://shiptalk-tools.vercel.app/cost-to-serve-analysis"
    },
    {
      id: 2,
      title: "Cross Docking",
      description: "Direct Transfers and Minimize Storage",
      icon: "🏷️",
      color: "from-purple-500 to-pink-500",
      link:"https://shiptalk-tools.vercel.app/cross-docking"
    },
    {
      id: 3,
      title: "Cycle Counting",
      description: "Optimize Inventory",
      icon: "📦",
      color: "from-blue-500 to-cyan-500",
      link:"https://shiptalk-tools.vercel.app/cycle-counting"
    },
    {
      id: 4,
      title: "Distributed Inventory",
      description: "Verify shipping addresses",
      icon: "✓",
      color: "from-green-500 to-emerald-500",
      link:'https://shiptalk-tools.vercel.app/distributed-inventory'
    },
    {
      id: 5,
      title: "Just-In-Time Inventory",
      description: "Matching Production and Demand",
      icon: "📄",
      color: "from-red-500 to-rose-500",
      link:"https://shiptalk-tools.vercel.app/just-in-time-inventory"
    },
  ],

  international: [
    {
      id: 6,
      title: "Duty Calculator",
      description: "Calculate import duties and taxes",
      icon: "💰",
      color: "from-amber-500 to-yellow-500",
      link:""
    },
    // Add more international tools...
  ],
};

export function ToolsCarousel({ title, category }) {
  return (
    <div className="space-y-4">
      <div
        className="flex items-center justify-between"
      >
        <h2
          className="text-2xl font-semibold text-white"
        >
          {title}
        </h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="text-white border-white/20"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="text-white border-white/20"
          >
            <ChevronRightIcon
              className="h-4 w-4"
            />
          </Button>
        </div>
      </div>

      <ScrollArea
        className="w-full whitespace-nowrap rounded-md"
      >
        <div
          className="flex w-full space-x-4 pb-4"
        >
          {tools[category].map((tool) => (
            <Link href={tool.link}>
            <Card
              key={tool.id}
              className="w-[300px] flex-none bg-black/50 border border-white/10 hover:border-amber-500/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl mb-4`}
                >
                  {tool.icon}
                </div>
                <h3
                  className="text-lg font-semibold text-white mb-2"
                >
                  {tool.title}
                </h3>
                <p className="text-gray-400">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
        <ScrollBar
          orientation="horizontal"
          className="bg-white/10"
        />
      </ScrollArea>
    </div>
  );
}
