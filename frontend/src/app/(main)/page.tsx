import { Footer } from "@/components/footer";
import { Box, Container, Stack } from "@chakra-ui/react";
import BrowseSection from "./sections/browse";
import HeroSection from "./sections/hero";
import MessageSection from "./sections/message";

export default function Page() {
  return (
    <Stack minH={"80vh"}>
      <Container>
        <HeroSection />
      </Container>
      <Box bg="orange.100">
        <Container>
          <MessageSection />
        </Container>
      </Box>

      <Box>
        <Container>
          <BrowseSection />
        </Container>
      </Box>

      <Box h={8} />

      <hr />
      <Footer />
    </Stack>
  );
}
