"use client";
import ChatInput from "@/components/chat/chatInput";
import { ChatContext } from "@/components/chat/chatProvider";
import ChatScreen from "@/components/chat/chatScreen";
import LandingScreen from "@/components/landing/landingScreen";
import { cn } from "@/lib/utils";
import React, { useContext } from "react";

const HomePage = () => {
  const { chatHistory } = useContext(ChatContext);
  return (
    <div
      className={cn(
        "max-w-screen-xl mx-auto flex flex-col",
        chatHistory.length > 0 ? "h-[calc(100vh-64px-65px+32px)]" : "h-[calc(100vh-64px-65px+180px)] sm:h-[calc(100vh-64px-65px+32px)]"
      )}
    >
      <div className="flex-1 custom-secondary-border-card flex flex-col h-full p-0 shadow-xl shadow-primary/15 rounded-2xl transition-all duration-300 ease-in-out">
        <LandingScreen />

        <ChatScreen />

        <ChatInput />
      </div>
    </div>
  );
};

export default HomePage;
