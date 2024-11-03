import { Container, Stack } from "@chakra-ui/react";
import HeroSection from "./sections/hero";

export default function Page() {
  return (
    <main>
      <Container>
        <Stack minH={"80vh"}>
          <HeroSection />
        </Stack>
      </Container>
    </main>
  );
}
