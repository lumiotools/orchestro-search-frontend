"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SendIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export function SearchSection() {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => {
    router.push("/chat");
  };

  const examples = [
    "20kg package from New York to London",
    "Express shipping to Tokyo",
    "Bulk shipping rates",
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-3 z-10 ">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="p-2 custom-secondary-card hover:scale-[1.01] transition-all duration-300 rounded-xl">
          <div
            onClick={handleClick}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            variant="ghost"
            className="w-full flex items-center justify-between pl-4 cursor-pointer"
            // className="w-full h-10 flex items-center justify-between bg-transparent hover:bg-white/0 text-left px-2 rounded-xl group relative overflow-hidden focus:!ring-transparent focus:!ring-offset-0"
          >
            <motion.span
              animate={{ opacity: searchValue ? 1 : 0.7 }}
              className="text-md text-gray-400"
            >
              {searchValue || "Ask Your Shipping query..."}
            </motion.span>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg p-2 group-hover:shadow-lg transition-all duration-300"
            >
              <SendIcon className="size-4 text-black" />
            </motion.div>

            {/* Animated Focus Ring */}
            <AnimatePresence>
              {isFocused && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute inset-0 border-2 border-amber-500/50 rounded-xl pointer-events-none"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Examples Section */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute -bottom-6 left-0 right-0 flex justify-center"
      >
        <div
          className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
        >
          <div
            className="flex items-center gap-2 text-xs text-gray-400"
          >
            <span>Examples:</span>
            <div className="flex gap-2">
              {examples.map((example, index) => (
                <React.Fragment key={example}>
                  <motion.span
                    whileHover={{ color: "#F59E0B" }}
                    className="cursor-pointer hover:text-amber-500 transition-colors"
                    onClick={() => setSearchValue(example)}
                  >
                    {example}
                  </motion.span>
                  {index < examples.length - 1 && (
                    <span>•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
}
