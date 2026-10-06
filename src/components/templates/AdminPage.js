import styles from "@/templates/AdminPage.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import AdminMain from "@/modules/AdminMain";
import connectDB from "@/utils/connectDB";
import Client from "@/models/Client";
import Profile from "@/models/Profile";

async function AdminPage({ email }) {
  await connectDB();

  const client = await Client.findOne({ email });

  const profiles = await Profile.find({ published: false });

  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <DashbordAside email={email} role={client.role} />
      </div>

      <div className={styles.main}>
        <AdminMain profiles={JSON.parse(JSON.stringify(profiles))} />
      </div>
    </div>
  );
}

export default AdminPage;