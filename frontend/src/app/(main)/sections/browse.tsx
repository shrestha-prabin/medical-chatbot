import { Category } from "@/types";
import { Box, Card, Heading, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import Link from "next/link";

const images: Record<any, string> = {
  drugs: "/pill.svg",
  diseases: "/virus-covid-19.svg",
  diagnosis: "/doctor.svg",
};

export default async function BrowseSection() {
  let data = await fetch(`${process.env.BASE_URL}/api/knowledge/categories/`);
  let categories: Category[] = await data.json();

  return (
    <Stack alignItems={"center"} py={16}>
      <Heading>Browse</Heading>

      <SimpleGrid columns={3} gap={8}>
        {categories.map((item) => (
          <Link key={item.name} href={item.slug}>
            <Card.Root
              flexDirection={"row"}
              alignItems={"center"}
              overflow={"hidden"}
            >
              <Box bg={"gray.100"}>
                <Image
                  src={images[item.slug]}
                  w={16}
                  h={16}
                  m={4}
                  opacity={0.7}
                />
              </Box>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card.Root>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
