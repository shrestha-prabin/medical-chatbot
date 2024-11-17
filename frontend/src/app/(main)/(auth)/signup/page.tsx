"use client";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { Box, Heading, Input, Stack } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type SignUpData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpData>({});

  const router = useRouter();

  const submitForm = async (data: SignUpData) => {
    try {
      if (data.password != data.confirmPassword) {
        throw Error("Passwords do not match");
      }

      const res = await signIn("signup", { redirect: false }, data);

      if (res?.ok) {
        window.location.href = "/";
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
          <Heading>Sign Up</Heading>

          <Field label="Username" required>
            <Input {...register("username")} />
          </Field>

          <Field label="Email" required>
            <Input {...register("email")} type="email" />
          </Field>

          <Field label="Password" required>
            <PasswordInput
              {...register("password")}
              autoComplete="new-password"
            />
          </Field>

          <Field label="Confirm Password" required>
            <PasswordInput
              {...register("confirmPassword")}
              autoComplete="new-password"
            />
          </Field>

          <Button rounded={"md"} mt={4} type="submit" loading={isSubmitting}>
            Sign Up
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
