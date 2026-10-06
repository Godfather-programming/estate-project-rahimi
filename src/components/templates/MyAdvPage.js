import styles from "@/templates/DashbordPage.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import MyAdvPart from "@/modules/MyAdvPart";

function MyAdvPage({ email, profiles, role }) {
  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <DashbordAside email={email} role={role} />
      </div>

      <div className={styles.main}>
        <MyAdvPart profiles={profiles} />
      </div>
    </div>
  );
}

export default MyAdvPage;