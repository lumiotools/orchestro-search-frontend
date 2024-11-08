"use client";
import React, { useContext } from "react";
import LandingHero from "./hero";
import { ChatContext } from "../chat/chatProvider";

const LandingScreen = () => {
  const { chatHistory } = useContext(ChatContext);

  if (chatHistory.length > 0) {
    return null;
  }
  return (
    <div className="flex-1 px-6">
      <LandingHero />
    </div>
  );
};

export default LandingScreen;
