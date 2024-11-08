import { Hand, HandHelping, Handshake } from "lucide-react";
import React from "react";

const LandingHero = () => {
  return (
    <div className="py-20 flex flex-col items-center">
      <div
        className={`w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Hand className="h-6 w-6 text-white" />
      </div>
      <h1 className="text-3xl font-semibold text-center text-muted-foreground">
        Hi, I am{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500">
          ShipTalk AI
        </span>
      </h1>
      <p className="text-center text-lg tracking-wide font-semibold">Can i help with any shipping query ?</p>
    </div>
  );
};

export default LandingHero;
