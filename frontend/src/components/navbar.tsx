"use client";

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Category } from "@/types";
import { Box, Container, Heading, HStack, Text } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { LuChevronDown } from "react-icons/lu";
import { Button } from "./ui/button";

type NavbarProps = {
  categories: Category[];
  user?: string | null;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ ...props }, ref) => {
    return (
      <Box as={"nav"} ref={ref} {...props} borderBottomWidth={1}>
        <Container>
          <HStack height={"10vh"} justify={"space-between"}>
            <Link href={"/"}>
              <Heading>Medical Chatbot</Heading>
            </Link>

            <HStack>
              <Button variant={"ghost"} as={Link} href="/">
                Home
              </Button>
              <MenuRoot>
                <MenuTrigger>
                  <Button as="div" variant={"ghost"}>
                    Browse
                    <LuChevronDown />
                  </Button>
                </MenuTrigger>

                <MenuContent>
                  {props.categories.map((item) => (
                    <MenuItem
                      key={item.slug}
                      value={item.slug}
                      as={Link}
                      href={`/${item.slug}`}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </MenuContent>
              </MenuRoot>

              {props.user ? (
                <>
                  <Button variant={"ghost"} as={Link} href="/chat">
                    Chat
                  </Button>

                  <Text as={"u"} ml={2}>
                    @{props.user}
                  </Text>

                  <Button variant={"outline"} onClick={() => signOut()} ml={2}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant={"outline"} as={Link} href="/login">
                    Login
                  </Button>

                  <Button
                    variant={"solid"}
                    as={Link}
                    href="/signup"
                    colorPalette={"teal"}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </HStack>
          </HStack>
        </Container>
      </Box>
    );
  }
);

Navbar.displayName = "Navbar";

export { Navbar };
