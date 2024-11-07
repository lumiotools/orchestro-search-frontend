"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { LinkIcon, LoaderCircle, SendIcon, User2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const ChatPage = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      role: "assistant",
      content: "Hello! How can I assist you with your shipping queries today?",
    },
  ]);
  const [question, setQuestion] = useState("");
  const [thinking, setThinking] = useState(false);
  const { toast } = useToast();

  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  }, [chatHistory]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight + 1000;
      }
    }
  };

  const handleAsk = async () => {
    setThinking(true);
    try {
      setChatHistory([...chatHistory, { role: "user", content: question }]);
      setQuestion("");

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/chat`,
        {
          chatHistory: chatHistory.map(({ sources, ...chat }) => ({ ...chat })),
          message: question,
        }
      );

      if (response.status !== 200) {
        throw new Error("Internal Server error");
      }

      const responseData = response.data;

      setChatHistory([
        ...chatHistory,
        { role: "user", content: question },
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
    <div className="max-w-screen-lg mx-auto h-[calc(100vh-65px-64px)] pt-8">
      <Card className="flex flex-col h-full p-0 shadow-xl shadow-primary/15">
        <ScrollArea className="flex-1 p-0 px-6" ref={scrollRef}>
          <div className="space-y-4 py-6">
            {[...chatHistory].map(({ content, role, sources }, index) => (
              <div
                key={index}
                className={`flex ${
                  role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-3 max-w-[80%] ${
                    role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {role === "assistant" ? (
                    <Avatar className="size-9">
                      <AvatarImage src="" />

                      <AvatarFallback className="size-full bg-primary text-primary-foreground">
                        {role === "assistant" ? "AI" : "You"}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <User2 className="size-9 p-1.5 bg-secondary text-primary rounded-full " />
                  )}

                  <div className="space-y-2">
                    <div
                      className={`rounded-lg p-3 prose prose-invert ${
                        role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <ReactMarkdown>{content}</ReactMarkdown>
                    </div>

                    {sources && sources.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {sources.map((source, index) =>
                          source.score > 0.8 ? (
                            <a
                              key={index}
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-amber-500 hover:text-amber-400"
                            >
                              <LinkIcon className="h-3 w-3" />
                              {source.url}
                            </a>
                          ) : (
                            <></>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {thinking && (
              <div className="flex justify-start gap-3">
                <LoaderCircle className="animate-spin bg-secondary text-primary rounded-full size-9 p-1.5" />

                <div className="rounded-lg p-3 bg-secondary text-secondary-foreground">
                  <p className="text-sm">Thinking...</p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-white/10">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={question && !thinking ? handleKeyPress : undefined}
              placeholder="Ask about shipping rates, tracking, or services..."
              className="flex-1 bg-black/30 border-white/20"
            />

            <Button
              onClick={handleAsk}
              disabled={!question || thinking}
              className="bg-amber-500 hover:bg-amber-600 text-black"
            >
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChatPage;
