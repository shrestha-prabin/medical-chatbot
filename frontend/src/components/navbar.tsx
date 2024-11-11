import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Category } from "@/types";
import { Box, Container, Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { LuChevronDown } from "react-icons/lu";
import { Button } from "./ui/button";

type NavbarProps = {
  categories: Category[];
} & React.HtmlHTMLAttributes<HTMLDivElement>;

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ ...props }, ref) => {
    return (
      <Box as={"nav"} ref={ref} {...props} borderBottomWidth={1}>
        <Container>
          <HStack py={8} justify={"space-between"}>
            <Heading>Medical Chatbot</Heading>

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

              <Button variant={"outline"} as={Link} href="/">
                Login
              </Button>

              <Button
                variant={"solid"}
                as={Link}
                href="/"
                colorPalette={"teal"}
              >
                Sign Up
              </Button>
            </HStack>
          </HStack>
        </Container>
      </Box>
    );
  }
);

Navbar.displayName = "Navbar";

export { Navbar };
