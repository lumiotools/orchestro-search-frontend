"use client";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ChatContext } from "./chatProvider";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";

const ChatInput = () => {
  const {
    question,
    setQuestion,
    inputRef,
    handleAsk,
    handleKeyPress,
    thinking,
  } = useContext(ChatContext);
  return (
    <div className="p-4 border-t border-white/10">
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Input
          ref={inputRef}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={question && !thinking ? handleKeyPress : undefined}
          placeholder="Ask Your Shipping query..."
          className="flex-1 custom-secondary-card outline-none !ring-transparent !ring-offset-0 !border-none"
        />

        <Button
          onClick={() => handleAsk()}
          disabled={!question || thinking}
          className="bg-amber-500 hover:bg-amber-600 text-black"
        >
          <SendIcon className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  );
};

export default ChatInput;
