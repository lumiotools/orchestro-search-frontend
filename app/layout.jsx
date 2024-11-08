import React from "react";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          {/* <Navbar /> */}
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
