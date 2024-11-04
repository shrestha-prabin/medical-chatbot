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
              <Link href="/">
                <Button variant={"ghost"}>Home</Button>
              </Link>
              <MenuRoot>
                <MenuTrigger>
                  <Button as="div" variant={"ghost"}>
                    Browse
                    <LuChevronDown />
                  </Button>
                </MenuTrigger>

                <MenuContent>
                  {props.categories.map((item) => (
                    <Link href={`/${item.slug}`}>
                      <MenuItem key={item.slug} value={item.slug}>
                        {item.name}
                      </MenuItem>
                    </Link>
                  ))}
                </MenuContent>
              </MenuRoot>

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
