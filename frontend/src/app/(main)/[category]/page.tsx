import { Category, Information } from "@/types";
import { Card, Container, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

import _ from "lodash";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  let data = await fetch(`${process.env.BASE_URL}/api/knowledge/categories/`);
  let categories: Category[] = await data.json();
  let category = categories.find((item) => item.slug == params.category);
  console.log("🚀 ~ category:", category);

  let data2 = await fetch(`${process.env.BASE_URL}/api/knowledge/information/`);
  let information: Information[] = await data2.json();
  information = information.filter((item) => item.category == category?.id);
  console.log("🚀 ~ information:", information);

  return (
    <div>
      <Container>
        <SimpleGrid columns={{ md: 2, lg: 3, xl: 4 }} gap={8} py={8}>
          {information.map((item) => (
            <Link
              key={`${params.category}-${item.title}`}
              href={`/${params.category}/${_.kebabCase(item.title)}`}
            >
              <Card.Root maxW="sm" overflow="hidden">
                {/* <Image
                  src={item.thumbnail}
                  alt={item.title}
                  h={200}
                  bg="gray.100"
                /> */}
                <Card.Body gap="2">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Description lineClamp={3}>
                    {item.summary}
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            </Link>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}
