import ChatInput from "@/components/chat/chatInput";
import ChatProvider from "@/components/chat/chatProvider";
import ChatScreen from "@/components/chat/chatScreen";
import LandingHero from "@/components/landing/hero";
import React from "react";

const HomePage = () => {
  return (
    <ChatProvider>
      <div className="max-w-screen-xl mx-auto h-[calc(100vh-64px)]">
        <div className="custom-secondary-border-card flex flex-col h-full p-0 shadow-xl shadow-primary/15 rounded-2xl transition-all duration-300 ease-in-out">
          <LandingHero />

          {/* <ChatScreen /> */}

          <ChatInput />
        </div>
      </div>
    </ChatProvider>
  );
};

export default HomePage;
