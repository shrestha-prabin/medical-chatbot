"use client";

import { MessageQnA } from "@/components/message-qna";
import { Message } from "@/types";
import { Box, HStack, Stack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import MessageSection from "../sections/message";
import { submitQuery } from "./actions";

export default function Content({
  messages: defaultMessages,
}: {
  messages: Message[];
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([...defaultMessages]);

  const contentEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (query: string) => {
    if (query) {
      setIsSubmitting(true);
      setMessages((messages) => [...messages, { user_prompt: query }]);
      try {
        const res = await submitQuery(query);
        console.log("🚀 ~ formAction ~ res:", res);
        setMessages((m) => {
          const messages = [...m];
          messages.pop();
          return [...messages, res];
        });
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Box bg="orange.100">
      <HStack px={8}>
        <Stack flex={1} h={"85vh"} overflowY={"scroll"} p={4}>
          {messages.map((item, i) => {
            return <MessageQnA key={i} data={item} />;
          })}
          <Box ref={contentEndRef} />
        </Stack>

        <Box>
          <MessageSection disabled={isSubmitting} onSubmit={handleSubmit} />
        </Box>
      </HStack>
    </Box>
  );
}
