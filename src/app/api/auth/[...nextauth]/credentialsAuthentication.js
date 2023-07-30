import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const authResponse = await axios.post(
            "https://yourdummyapi.com/api/auth/login/",
            {
              email: credentials.email,
              password: credentials.password,
            }
          );
          if (authResponse.status !== 200) {
            return null;
          }
          const user = authResponse.data;
          console.log("USER", user);
          return user;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/", // Displays signin buttons
  },
  callbacks: {
    async session({ session, token, user }) {
      // Here we can add check if user token is valid or not
      // /me endpoint can be used for this
      session.user = token.originUser;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token = { ...token, originUser: user };
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
