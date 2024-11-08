import React from "react";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import ChatProvider from "@/components/chat/chatProvider";
import { Toaster } from "@/components/ui/toaster";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ChatProvider>
          <div className="min-h-screen">
            <Navbar />
            <main className="mx-auto px-4 pb-8">{children}</main>
          </div>
        </ChatProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
