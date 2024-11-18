"use client";

import { MessageQnA } from "@/components/message-qna";
import { Message } from "@/types";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
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

  const searchParams = useSearchParams();

  useEffect(() => {
    console.log({ searchParams });

    if (searchParams && !isSubmitting) {
      const q = searchParams.get("q");
      if (q) {
        handleSubmit(q);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    contentEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (query: string) => {
    const lastQuery = messages[messages.length - 1];
    if (lastQuery?.user_prompt == query) return;

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
      <Flex
        px={8}
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
      >
        <Stack flex={1} h={"85vh"} overflowY={"scroll"} p={4}>
          {messages.map((item, i) => {
            return <MessageQnA key={i} data={item} />;
          })}
          <Box ref={contentEndRef} />
        </Stack>

        <Box>
          <MessageSection disabled={isSubmitting} onSubmit={handleSubmit} />
        </Box>
      </Flex>
    </Box>
  );
}
