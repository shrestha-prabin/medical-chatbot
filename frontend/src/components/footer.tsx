import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";

type FooterProps = {} & React.HtmlHTMLAttributes<HTMLDivElement>;

const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ ...props }, ref) => {
    return (
      <Box as={"footer"} ref={ref} {...props} py={4}>
        <Container>
          <Stack alignItems={"center"}>
            <Text fontSize={"sm"} color={"gray.500"} textAlign={"center"}>
              &copy; {new Date().getFullYear()} Medical Chatbot. All rights
              reserved.
            </Text>
          </Stack>
        </Container>
      </Box>
    );
  }
);

Footer.displayName = "Footer";

export { Footer };
