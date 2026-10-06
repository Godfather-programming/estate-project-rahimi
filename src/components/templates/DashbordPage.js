import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import styles from "@/templates/DashbordPage.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import DashbordMain from "@/modules/DashbordMain";
import Client from "@/models/Client";
import connectDB from "@/utils/connectDB";
import { authOptions } from "@/utils/authOptions";

async function DashbordPage() {
  await connectDB();

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  const email = session?.user.email;
  const client = await Client.findOne({ email });
  const date = client?.createdAt;
  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <DashbordAside email={email} role={client.role} />
      </div>

      <div className={styles.main}>
        <DashbordMain date={date} />
      </div>
    </div>
  );
}

export default DashbordPage;