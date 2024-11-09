"use client";

import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "./chatProvider";
import { ScrollArea } from "../ui/scroll-area";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LinkIcon, LoaderCircle, User2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ChatScreen = () => {
  const { chatHistory, thinking } = useContext(ChatContext);

  const scrollRef = useRef(null);

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

  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  }, [chatHistory]);

  if (chatHistory.length == 0) {
    return null;
  }

  return (
    <ScrollArea className="flex-1 p-0 pt-1 px-6" ref={scrollRef}>
      <div className="space-y-4 py-6">
        {[...chatHistory].map(({ content, role, sources }, index) => (
          <motion.div
            key={index}
            className={`flex ${
              role === "user" ? "justify-end" : "justify-start"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                </div>

                {sources && sources.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {sources.map((source, index) => (
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
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {thinking && (
          <motion.div
            className="flex justify-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <LoaderCircle className="animate-spin bg-secondary text-primary rounded-full size-9 p-1.5" />

            <div className="rounded-lg p-3 bg-secondary text-secondary-foreground">
              <p className="text-sm">Thinking...</p>
            </div>
          </motion.div>
        )}
      </div>
    </ScrollArea>
  );
};

export default ChatScreen;
