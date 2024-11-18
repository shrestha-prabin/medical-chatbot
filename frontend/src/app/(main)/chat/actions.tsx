"use server";

import { auth } from "@/auth";
import { Message } from "@/types";

export async function submitQuery(query: string): Promise<Message> {
  console.log("🚀 ~ submitQuery ~ query:", query);
  const user = await auth();

  const res = await fetch(`${process.env.BASE_URL}/api/medicalbot/message/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${user?.access}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const data = await res.json();
  console.log("🚀 ~ submitQuery ~ data:", data);
  return data;
}
