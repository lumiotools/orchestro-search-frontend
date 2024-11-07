import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, BellIcon, UserCircleIcon } from "lucide-react";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useNavigate } from "react-router-dom";

export function Navbar() {
//   const router = useRouter();

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-black/95 border-b border-golden-500/20"
    >
      <div className="container mx-auto px-4">
        <div
          className="flex items-center justify-between h-16"
        >
          <div
            className="flex items-center space-x-8"
          >
            <Link href={"/"}>
            <h1
              className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent cursor-pointer"
            >
              ShipTools
            </h1>
            </Link>
            <div
              className="hidden md:flex items-center space-x-6"
            >
                <Link href={"/"}>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white"
                // onClick={() => navigate("/")}
              >
                Home
              </Button>
              </Link>

              <Link href={"/"}>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white"
                // onClick={() => navigate("/calculator")}
              >
                Calculator
              </Button>
              </Link>

            <Link href={"/"}>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white"
              >
                Tracking
              </Button>
              </Link>
            </div>
          </div>

          <div
            className="flex items-center space-x-4"
          >
            <Link href={"/chat"}>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
            >
              <MessageSquare
                className="h-5 w-5 text-gray-300"
              />
              <span
                className="absolute -top-1 -right-1 h-3 w-3 bg-amber-500 rounded-full"
              />
            </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <BellIcon
                className="h-5 w-5 text-gray-300"
              />
            </Button>
            <Button variant="ghost" size="icon">
              <UserCircleIcon
                className="h-5 w-5 text-gray-300"
              />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
