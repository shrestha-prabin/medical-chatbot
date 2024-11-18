"use client";

import { Button } from "@/components/ui/button";
import { InputGroup } from "@/components/ui/input-group";
import { Center, Flex, Heading, HStack, Input, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { LuHeartPulse } from "react-icons/lu";

export default function MessageSection({
  disabled,
  onSubmit,
}: {
  disabled?: boolean;
  onSubmit?: (q: string) => void;
}) {
  const { register, handleSubmit, reset } = useForm<{ query: string }>();

  const router = useRouter();

  const submitForm = (data: { query: string }) => {
    if (onSubmit) {
      onSubmit?.(data.query);
      reset();
    } else {
      router.push(`/chat?q=${data.query}`);
    }
  };

  return (
    <Center>
      <Stack pt={12} pb={16}>
        <Heading>How can I help you?</Heading>
        <Stack w={"90vw"} maxW={"40em"}>
          <form onSubmit={handleSubmit(submitForm)}>
            <HStack>
              <InputGroup startElement={<LuHeartPulse size={20} />} flex={1}>
                <Input
                  size={"xl"}
                  rounded={"full"}
                  placeholder="Ask Anything..."
                  bg={"white"}
                  {...register("query")}
                />
              </InputGroup>
              <Button
                variant={"solid"}
                size={"xl"}
                me={-3}
                type="submit"
                colorPalette={"orange"}
                disabled={disabled}
              >
                Send
              </Button>
            </HStack>
          </form>

          <Flex gap={2} maxW={"100%"} flexWrap={"wrap"}>
            {[
              "What is astigmatism?",
              "When should I see an eye care specialist?",
              "What is Alzheimer's disease?",
              "What is the difference between Alzheimer and dementia?",
            ].map((item, i) => (
              <Button
                key={i}
                size={"xs"}
                bg="white"
                color="black"
                disabled={disabled}
                onClick={() => submitForm?.({ query: item })}
              >
                {item}
              </Button>
            ))}
          </Flex>
        </Stack>
      </Stack>
    </Center>
  );
}
