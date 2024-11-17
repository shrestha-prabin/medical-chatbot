import { login, profile, signUp } from "@/services/auth";
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { AuthOptions, NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const config: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      async authorize(credentials, req) {
        const { username, password } = req.query ?? {};
        const loginRes = await login(username, password);
        const userRes = await profile(loginRes.access);

        return {
          access: loginRes.access,
          user: userRes,
        };
      },
    }),
    CredentialsProvider({
      id: "signup",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      async authorize(credentials, req) {
        const { username, email, password } = req.query ?? {};
        const res = await signUp(username, email, password);
        return {
          access: res.tokens?.access,
          user: res.user,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      const access = !!user ? user.access : token.access;

      if (account && user) {
        return {
          ...token,
          access,
          user: user.user,
        };
      } else {
        return {
          ...token,
        };
      }
    },
    async session({ session, token }) {
      session.access = token.access as string;
      session.user = token.user as any;
      return session;
    },
  },
} satisfies NextAuthOptions;

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}

export const authOptions: NextAuthOptions = config;
