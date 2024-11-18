"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export default function Provider(props: { children: React.ReactNode }) {
  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      localStorage.setItem("theme", "light");
      window.location.reload();
    }
  }, []);

  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
