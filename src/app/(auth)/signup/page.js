import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import SignupPage from "@/templates/SignupPage";
import { authOptions } from "@/utils/authOptions";

async function Signup() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SignupPage />;
}

export default Signup;
