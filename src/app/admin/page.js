import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Client from "@/models/Client";
import AdminPage from "@/templates/AdminPage";
import { authOptions } from "@/utils/authOptions";
import connectDB from "@/utils/connectDB";

export const metadata = {
  title: "پنل ادمین املاک | پروژه آزمایشی",
  description: "سایت خرید و فروش املاک",
};

async function Admin() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) redirect("/signin");

  await connectDB();

  const client = await Client.findOne({ email: session.user.email });
  console.log(client);
  if (!client) return <h3> مشکلی پیش آمده است </h3>;
  if (client.role !== "ADMIN") redirect("/dashbord");

  return <AdminPage email={client.email} />;
}

export default Admin;
