import React from "react";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <div
      className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black"
    >
      <Navbar />
      <main
        className="container mx-auto px-4 pt-20 pb-8"
      >
        {children}
      </main>
    </div>
      </body>
    </html>
  );
};

export default RootLayout;
