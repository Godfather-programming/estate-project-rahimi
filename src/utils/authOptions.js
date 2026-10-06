import CredentialProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/connectDB";
import Client from "@/models/Client";
import { verifyPassword } from "@/utils/auth";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("لطفا اطلاعات معتبر وارد کنید!");
        }

        await connectDB();

        const client = await Client.findOne({ email });
        if (!client) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید!");

        const isValid = await verifyPassword(password, client.password);
        console.log(isValid);
        if (!isValid) {
          throw new Error("ایمیل یا رمزعبور اشتباه است!");
        }

        return { email: email, id: password };
      },
    }),
  ],
};
