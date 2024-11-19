import { Button } from "@/components/ui/button";
import { Category } from "@/types";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default async function BrowseSection() {
  const data = await fetch(`${process.env.BASE_URL}/api/knowledge/categories/`);
  const categories: Category[] = await data.json();

  return (
    <Stack alignItems={"center"} py={8}>
      <Heading>Browse</Heading>

      <SimpleGrid columns={3} gap={8} mt={4}>
        {categories.map((item) => (
          <Button
            key={item.name}
            variant={"outline"}
            w="full"
            as={Link}
            size={"xl"}
            href={item.slug}
          >
            {item.name}
            <BiChevronRight />
          </Button>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
