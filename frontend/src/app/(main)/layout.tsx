import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Box, Stack } from "@chakra-ui/react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let data = await fetch(`${process.env.BASE_URL}/api/knowledge/categories/`);
  let categories = await data.json();

  return (
    <Stack>
      <Navbar categories={categories} />
      <Box minH={"80vh"}>{children}</Box>
      <Footer />
    </Stack>
  );
}
