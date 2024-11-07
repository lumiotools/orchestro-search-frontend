"use client";
import ChatIntroInput from "@/components/chat/introInput";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import React, { useState } from "react";

const ChatPage = () => {
  const [chatHistory, setChatHistory] = useState([]);
  //   const [message, setMessage] = useState("");
  const [thinking, setThinking] = useState(false);
  const { toast } = useToast();

  const handleAsk = async (question) => {
    setThinking(true);
    try {
      const response = await axios.post(`${NEXT_PUBLIC_API_URL}/api/v1/chat`, {
        chatHistory,
        message: question,
      });

      if (response.status !== 200) {
        throw new Error("Internal Server error");
      }

      const responseData = response.data;

      setChatHistory([
        ...chatHistory,
        {
          role: "assistant",
          message: responseData.message,
          sources: responseData.sources,
        },
      ]);
    } catch (error) {
      toast({
        description: error.message,
        variant: "destructive",
      });
    }
    setThinking(false);
  };

  if (chatHistory.length === 0) {
    return <ChatIntroInput onAsk={handleAsk} />;
  }
  return <div>ChatPage</div>;
};

export default ChatPage;
