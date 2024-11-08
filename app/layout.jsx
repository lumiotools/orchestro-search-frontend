import React from "react";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import ChatProvider from "@/components/chat/chatProvider";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <ChatProvider>
        <div className="min-h-screen">
          <Navbar />
          <main className="container mx-auto px-4 pb-8">{children}</main>
        </div>
        </ChatProvider>
      </body>
    </html>
  );
};

export default RootLayout;
