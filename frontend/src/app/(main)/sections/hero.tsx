import { Button } from "@/components/ui/button";
import { InputGroup } from "@/components/ui/input-group";
import { Flex, Input, Stack } from "@chakra-ui/react";
import { LuHeartPulse } from "react-icons/lu";

export default function HeroSection() {
  return (
    <Stack mt={"30vh"} alignItems={"center"}>
      <form>
        <Stack w={"90vw"} maxW={"40em"}>
          <InputGroup
            startElement={<LuHeartPulse size={20} />}
            endElement={
              <Button variant={"solid"} size={"xl"} me={-3}>
                Send
              </Button>
            }
          >
            <Input size={"xl"} rounded={"full"} placeholder="Ask Anything..." />
          </InputGroup>

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
