import { Center, Container } from "@chakra-ui/react";

import { Prose } from "@/components/ui/prose";
import { cookies } from "next/headers";

export default async function Page({
  params,
}: {
  params: { category: string; id: string };
}) {
  const _cookies = cookies();

  const data = await fetch(
    `${process.env.BASE_URL}/api/knowledge/information/${params.id}`
  );
  const information = await data.json();
  console.log("🚀 ~ information:", information);

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
