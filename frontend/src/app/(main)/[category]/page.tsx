import { Category, Information } from "@/types";
import { Container } from "@chakra-ui/react";
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
        {information.map((item) => (
          <Link
            key={`${params.category}-${item.subcategory}`}
            href={`/${params.category}/${_.kebabCase(item.subcategory)}`}
          >
            {item.subcategory}
          </Link>
        ))}
      </Container>
    </div>
  );
}
