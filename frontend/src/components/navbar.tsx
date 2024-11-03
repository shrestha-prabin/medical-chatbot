import { Box, Container, Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type NavbarProps = {} & React.HtmlHTMLAttributes<HTMLDivElement>;

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ ...props }, ref) => {
    return (
      <Box as={"nav"} ref={ref} {...props} borderBottomWidth={1}>
        <Container>
          <HStack py={8} justify={"space-between"}>
            <Heading>Medical Chatbot</Heading>

            <HStack>
              <Link href="/">
                <Button variant={"ghost"}>Home</Button>
              </Link>
              <Link href="/">
                <Button variant={"ghost"}>Browse</Button>
              </Link>
              <Link href="/">
                <Button variant={"ghost"}>About Us</Button>
              </Link>
              <Link href="/">
                <Button variant={"ghost"}>Contact Us</Button>
              </Link>

              <Link href="/">
                <Button variant={"outline"}>Login</Button>
              </Link>

              <Link href="/">
                <Button variant={"solid"}>Sign Up</Button>
              </Link>
            </HStack>
          </HStack>
        </Container>
      </Box>
    );
  }
);

Navbar.displayName = "Navbar";

export { Navbar };
