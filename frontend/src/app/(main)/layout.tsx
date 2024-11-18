import { auth } from "@/auth";
import { Navbar } from "@/components/navbar";
import { Box, Stack } from "@chakra-ui/react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res: any = await auth();

  let data = await fetch(`${process.env.BASE_URL}/api/knowledge/categories/`);
  let categories = await data.json();

  return (
    <Stack gap={0}>
      <Navbar categories={categories} user={res?.user?.username} />
      <Box minH={"80vh"}>{children}</Box>
    </Stack>
  );
}
