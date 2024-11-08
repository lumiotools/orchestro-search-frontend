"use client";
import { useToast } from "@/hooks/use-toast";
import React, { createContext, useRef, useState } from "react";
import axios from "axios";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([
    // {
    //   role: "assistant",
    //   content: "Hello! How can I assist you with your shipping queries today?",
    // },
  ]);
  const [question, setQuestion] = useState("");
  const [thinking, setThinking] = useState(false);
  const { toast } = useToast();

  const inputRef = useRef(null);

  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);

  const handleAsk = async (userQuestion = question) => {
    setThinking(true);
    try {
      setChatHistory([...chatHistory, { role: "user", content: userQuestion }]);
      setQuestion("");

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/chat`,
        {
          chatHistory: chatHistory.map(({ sources, ...chat }) => ({ ...chat })),
          message: userQuestion,
        }
      );

      if (response.status !== 200) {
        throw new Error("Internal Server error");
      }

      const responseData = response.data;

      setChatHistory([
        ...chatHistory,
        { role: "user", content: userQuestion },
        {
          role: "assistant",
          content: responseData.message,
          sources: responseData.sources,
        },
      ]);
    } catch (error) {
      console.log(error);
      toast({
        description: error.message,
        variant: "destructive",
      });
    }
    setThinking(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  return (
    <ChatContext.Provider
      value={{
        chatHistory,
        setChatHistory,
        question,
        setQuestion,
        thinking,
        setThinking,
        inputRef,
        handleAsk,
        handleKeyPress,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
