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
  let data = await res.json();
  console.log("🚀 ~ Page ~ data:", data);

  if (!Array.isArray(data)) data = [];

  return <Content messages={data ?? []} />;
}
