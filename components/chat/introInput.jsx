import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const ChatIntroInput = () => {
  return (
    <div className="w-full max-w-screen-sm mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <h2 className="text-3xl font-semibold">Ask Your Shipping Query</h2>

      <Textarea placeholder="Search your query..." />
      <div className="w-full flex">
        <Button className="gap-2 ml-auto">
          Ask <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default ChatIntroInput;
