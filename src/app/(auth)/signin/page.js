import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import SigninPage from "@/templates/SigninPage";

async function Signin() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SigninPage session={session} />;
}

export default Signin;
