"use client";
import React, { useContext } from "react";
import LandingHero from "./hero";
import { ChatContext } from "../chat/chatProvider";
import { QuickActions } from "../old/home/quick-actions";

const LandingScreen = () => {
  const { chatHistory,handleAsk } = useContext(ChatContext);

  if (chatHistory.length > 0) {
    return null;
  }

  const handleSentPrompt=(prompt)=>{
    handleAsk(prompt);
  }

  return (
    <div className="flex-1 px-6 flex justify-between flex-col">
      <LandingHero />
      <div className="px-5 py-3">
          <QuickActions handleSentPrompt={handleSentPrompt}/>
      </div>
    </div>
  );
};

export default LandingScreen;
