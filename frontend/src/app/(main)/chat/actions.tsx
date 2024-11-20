"use server";

import { auth } from "@/auth";
import { Message } from "@/types";

export async function submitQuery(query: string): Promise<Message> {
  console.log("🚀 ~ submitQuery ~ query:", query);
  const user = await auth();

  let headers: any = {
    "Content-Type": "application/json",
  };

  if (user?.access) {
    headers = { ...headers, Authorization: user.access };
  }

  const res = await fetch(`${process.env.BASE_URL}/api/medicalbot/message/`, {
    method: "POST",
    headers,
    body: JSON.stringify({ query }),
  });
  const data = await res.json();
  console.log("🚀 ~ submitQuery ~ data:", data);
  return data;
}
