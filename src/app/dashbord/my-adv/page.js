import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Client from "@/models/Client";
import MyAdvPage from "@/templates/MyAdvPage";
import { authOptions } from "@/utils/authOptions";

async function MyAdv() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const { email } = session.user;
  const customer = await Client.findOne({ email });
  const [client] = await Client.aggregate([
    { $match: { email } },
    {
      $lookup: {
        from: "profiles",
        localField: "_id",
        foreignField: "userId",
        as: "clientProfiles",
      },
    },
  ]);

  const profiles = JSON.parse(JSON.stringify(client.clientProfiles));

  return <MyAdvPage email={email} profiles={profiles} role={customer.role} />;
}

export default MyAdv;
