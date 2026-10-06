import styles from "@/templates/ProfileDetailsPage.module.scss";
import DetailsMain from "@/modules/DetailsMain";
import DetailsAside from "@/modules/DetailsAside";

function ProfileDetailsPage({ intendedProfile }) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <DetailsMain intendedProfile={intendedProfile} />
      </div>

      <div className={styles.aside}>
        <DetailsAside intendedProfile={intendedProfile} />
      </div>
    </div>
  );
}

export default ProfileDetailsPage;