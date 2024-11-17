import { parseError } from "@/utils";

export async function login(
  username: string,
  password: string
): Promise<{ refresh: string; access: string }> {
  const res = await fetch(`${process.env.BASE_URL}/api/auth/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  console.log("🚀 ~ data:", data);
  if (res.status == 200) return data;
  else throw Error(parseError(data));
}

export async function signUp(
  username: string,
  email: string,
  password: string
): Promise<any> {
  const res = await fetch(`${process.env.BASE_URL}/api/auth/signup/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await res.json();
  console.log("🚀 ~ data:", data);
  if (res.status == 201) return data;
  else throw Error(parseError(data));
}

export async function profile(token: string): Promise<any> {
  const res = await fetch(`${process.env.BASE_URL}/api/auth/profile/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  console.log("🚀 ~ data:", data);
  if (res.status == 200) return data;
  else throw Error(parseError(data));
}
