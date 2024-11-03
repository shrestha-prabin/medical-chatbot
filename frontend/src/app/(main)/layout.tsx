"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Stack } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack>
      <Navbar />
      {children}
      <Footer />
    </Stack>
  );
}
