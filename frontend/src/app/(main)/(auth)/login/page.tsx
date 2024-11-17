"use client";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { Box, Heading, Input, Stack } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type LoginData = { username: string; password: string };

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginData>({});

  const submitForm = async (data: LoginData) => {
    try {
      const res = await signIn("credentials", { redirect: false }, data);
      if (res?.ok) {
        window.location.replace("/");
      } else {
        throw Error(res?.error ?? "Something went wrong");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Box p={24}>
      <form onSubmit={handleSubmit(submitForm)}>
        <Stack>
          <Heading>Login</Heading>

          <Field label="Username" required>
            <Input {...register("username")} />
          </Field>

          <Field label="Password" required>
            <PasswordInput
              {...register("password")}
              autoComplete="current-password"
            />
          </Field>

          <Button rounded={"md"} mt={4} type="submit" loading={isSubmitting}>
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
