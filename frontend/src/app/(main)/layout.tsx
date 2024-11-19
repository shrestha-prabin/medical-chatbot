import { auth } from "@/auth";
import { Navbar } from "@/components/navbar";
import { Box, Stack } from "@chakra-ui/react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res: any = await auth();
  console.log("🚀 ~ res:", res);

  const data = await fetch(`${process.env.BASE_URL}/api/knowledge/categories/`);
  const categories = await data.json();

  return (
    <Stack gap={0}>
      <Navbar categories={categories} user={res?.user?.username} />
      <Box minH={"90vh"}>{children}</Box>
    </Stack>
  );
}
