"use client";
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, BellIcon, UserCircleIcon } from "lucide-react";
import Link from "next/link";
import { ChatContext } from "./chat/chatProvider";

export function Navbar() {
  const { chatHistory, setChatHistory } = useContext(ChatContext);

  return (
    <nav className="w-full z-50 custom-border-card border-golden-500/20 px-8">
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href={"/"}>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent cursor-pointer">
                ShipTalk
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              {/* <Link href={"/"}>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white"
                // onClick={() => navigate("/")}
              >
                Home
              </Button>
              </Link> */}
            </div>
          </div>

          {chatHistory.length > 0 && (
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setChatHistory([])}
                variant="ghost"
                // size="icon"
                className="relative custom-secondary-card !bg-transparent hover:!bg-transparent"
              >
                <MessageSquare className="h-5 w-5 text-gray-300" />
                New Chat
                {/* <span
                className="absolute -top-1 -right-1 h-3 w-3 bg-amber-500 rounded-full"
              /> */}
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
