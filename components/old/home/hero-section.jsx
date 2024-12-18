import React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SearchSection } from "./search-section";

export function HeroSection() {
  return (
    <div className="relative h-[75vh] sm:h-[60vh] rounded-xl overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <img
          src="/hero.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent"
      >
        {/* Content Container */}
        <div className="absolute bottom-20 left-0 p-4 sm:p-8 space-y-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl xl:text-7xl font-bold text-white tracking-tight"
          >
            Shipping AI{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500">
              Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl"
          >
            Transforming Global Logistics Through Advanced AI Solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center sm:flex-row gap-4 !mt-8"
          >
            <Link href={"/chat"}>
              <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black text-lg px-8 py-6 rounded-xl transform transition-all hover:scale-[1.02] duration-300">
                Get Started
              </Button>
            </Link>

            <SearchSection />
            {/* <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-xl backdrop-blur-sm transform transition-all hover:scale-105"
            >
              <PlayCircleIcon
                className="mr-2 h-5 w-5"
              />
              Watch Demo
            </Button> */}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
