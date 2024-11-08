import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart2, Package2, FileText, Globe2 } from "lucide-react";
import {motion} from "framer-motion"
const quickActions = [
  {
    title: "Cost to Serve Analysis",
    description: "What is the best tool for Cost to Serve Analysis",
    icon: BarChart2,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Distributed Inventory",
    description: "How can I balance inventory across different regions?",
    icon: Package2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cross Docking",
    description: "What steps can I take to lower handling costs with cross-docking?",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cycle Counting",
    description: "Are there any tips for reducing errors during cycle counting?",
    icon: Globe2,
    color: "from-green-500 to-emerald-500",
  },
];

export function QuickActions({handleSentPrompt}) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
      
    >
      {quickActions.map((action, index) => (
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 * index, duration: 0.5, ease: "easeInOut" }}
          key={index}
          className="custom-card transition-all duration-300 cursor-pointer group rounded-xl"
          onClick={()=>handleSentPrompt(action.description)}
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
        </motion.div>
      ))}
    </motion.div>
  );
}
