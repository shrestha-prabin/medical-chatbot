import { auth } from "@/auth";
import Content from "./content";

export default async function Page() {
  const user = await auth();
  const res = await fetch(`${process.env.BASE_URL}/api/medicalbot/message/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${user?.access}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return <Content messages={data} />;
}
