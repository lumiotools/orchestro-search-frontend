import { Hand, HandHelping, Handshake } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
const LandingHero = () => {
  return (
    <div className="pt-16 md:pb-8 flex flex-col items-center space-y-1">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className={`size-10 md:size-12 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 mb-2 md:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
      >
        <Hand className="size-5 md:size-6 text-white" />
      </motion.div>
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="text-2xl md:text-4xl font-semibold text-center text-white"
      >
        Hi, I am{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500">
          ShipSearch AI
        </span>
      </motion.h1>

      <motion.h2
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 0.3,
        }}
        className="md:text-xl font-medium text-center text-muted-foreground"
      >
        How can I help you with any shipping query ?
      </motion.h2>
      {/* <p className="text-center "></p> */}
      {/* <p className="max-w-md text-sm text-center tracking-wide text-muted-foreground">Ready to assist you with anything you need, from answering questions to providing recommendations. Let's get started!</p> */}
    </div>
  );
};

export default LandingHero;
