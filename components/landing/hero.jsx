import { Hand, HandHelping, Handshake } from "lucide-react";
import React from "react";

const LandingHero = () => {
  return (
    <div className="py-20 flex flex-col items-center space-y-1">
      <div
        className={`w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
      >
        <Hand className="h-6 w-6 text-white" />
      </div>
      <h1 className="text-4xl font-semibold text-center text-white">
        Hi, I am{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500">
          ShipTalk AI
        </span>
      </h1>

      <h2 className="text-xl font-medium text-center text-muted-foreground">
        How can I help you with any shipping query ?
      </h2>
      {/* <p className="text-center "></p> */}
      {/* <p className="max-w-md text-sm text-center tracking-wide text-muted-foreground">Ready to assist you with anything you need, from answering questions to providing recommendations. Let's get started!</p> */}
    </div>
  );
};

export default LandingHero;
