import { Box, HStack, Image, Text } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box py={8}>
      <HStack justifyContent={"center"}>
        <Text maxW={500}>
          {
            "An AI-powered medical chatbot providing instant, reliable health information and symptom assessment. Get personalized responses, medical advice, and guidance for various conditions, all from the comfort of your home."
          }
        </Text>

        <Image src="/chat.svg" height={150} width={150} />
      </HStack>
    </Box>
  );
}
