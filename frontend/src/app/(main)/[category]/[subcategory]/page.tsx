import { Category, Information } from "@/types";
import { Center, Container } from "@chakra-ui/react";

import { Prose } from "@/components/ui/prose";
import _ from "lodash";

export default async function Page({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  let data = await fetch(`${process.env.BASE_URL}/api/knowledge/categories/`);
  let categories: Category[] = await data.json();
  let category = categories.find((item) => item.slug == params.category);

  let data2 = await fetch(`${process.env.BASE_URL}/api/knowledge/information/`);
  let informationList: Information[] = await data2.json();
  let information = informationList.find(
    (item) =>
      item.category == category?.id &&
      _.kebabCase(item.subcategory) == params.subcategory
  );

  return (
    <div>
      <Container>
        <Center>
          <Prose>
            <div
              dangerouslySetInnerHTML={{ __html: information?.text ?? "" }}
            />
          </Prose>
        </Center>
      </Container>
    </div>
  );
}
