import { Information } from "@/types";
import { Center, Container } from "@chakra-ui/react";

import { Prose } from "@/components/ui/prose";
import _ from "lodash";

export default async function Page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const data = await fetch(
    `${process.env.BASE_URL}/api/knowledge/information/`
  );
  const informationList: Information[] = await data.json();
  const information = informationList.find(
    (item) => _.kebabCase(item.title) == params.slug
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
