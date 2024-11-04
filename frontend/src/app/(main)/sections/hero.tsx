import { Button } from "@/components/ui/button";
import { InputGroup } from "@/components/ui/input-group";
import { Flex, HStack, Input, Stack } from "@chakra-ui/react";
import { LuHeartPulse } from "react-icons/lu";

export default function HeroSection() {
  return (
    <Stack mt={"30vh"} alignItems={"center"}>
      <form>
        <Stack w={"90vw"} maxW={"40em"}>
          <HStack>
            <InputGroup startElement={<LuHeartPulse size={20} />} flex={1}>
              <Input
                size={"xl"}
                rounded={"full"}
                placeholder="Ask Anything..."
              />
            </InputGroup>
            <Button variant={"solid"} size={"xl"} me={-3} type="submit">
              Send
            </Button>
          </HStack>

          <Flex gap={2} maxW={"100%"} flexWrap={"wrap"}>
            <Button size={"xs"} variant={"outline"}>
              What is astigmatism?
            </Button>

            <Button size={"xs"} variant={"outline"}>
              When should I see an eye care specialist?
            </Button>

            <Button size={"xs"} variant={"outline"}>
              {"What is Alzheimer's disease?"}
            </Button>

            <Button size={"xs"} variant={"outline"}>
              {"What is the difference between Alzheimer and dementia?"}
            </Button>
          </Flex>
        </Stack>
      </form>
    </Stack>
  );
}
