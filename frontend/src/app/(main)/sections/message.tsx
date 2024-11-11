import { Button } from "@/components/ui/button";
import { InputGroup } from "@/components/ui/input-group";
import { Center, Flex, Heading, HStack, Input, Stack } from "@chakra-ui/react";
import { LuHeartPulse } from "react-icons/lu";

export default function MessageSection() {
  return (
    <Center>
      <Stack pt={12} pb={16}>
        <Heading>How can I help you?</Heading>
        <form>
          <Stack w={"90vw"} maxW={"40em"}>
            <HStack>
              <InputGroup startElement={<LuHeartPulse size={20} />} flex={1}>
                <Input
                  size={"xl"}
                  rounded={"full"}
                  placeholder="Ask Anything..."
                  bg={"white"}
                />
              </InputGroup>
              <Button
                variant={"solid"}
                size={"xl"}
                me={-3}
                type="submit"
                colorPalette={"orange"}
              >
                Send
              </Button>
            </HStack>

            <Flex gap={2} maxW={"100%"} flexWrap={"wrap"}>
              {[
                "What is astigmatism?",
                "When should I see an eye care specialist?",
                "What is Alzheimer's disease?",
                "What is the difference between Alzheimer and dementia?",
              ].map((item, i) => (
                <Button key={i} size={"xs"} bg="white" color="black">
                  {item}
                </Button>
              ))}
            </Flex>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
}
