import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, SendIcon } from "lucide-react";

const ChatIntroInput = ({ question, setQuestion, thinking, handleAsk }) => {
  return (
    <div className="w-full max-w-screen-sm mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <h2 className="text-3xl font-semibold">Ask Your Shipping Query</h2>

      <Textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your query..."
        className="bg-black/30 border-white/20"
      />
      <div className="w-full flex">
        <Button
          className="gap-2 ml-auto bg-amber-500 hover:bg-amber-600 text-black"
          disabled={!question || thinking}
          onClick={handleAsk}
        >
          Ask <SendIcon />
        </Button>
      </div>
    </div>
  );
};

export default ChatIntroInput;
