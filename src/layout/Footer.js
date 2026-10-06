import styles from "@/layout/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.introduction}>
        <h2> سامانه خرید و اجاره ملک </h2>
        <p>
          {" "}
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است{" "}
        </p>
      </div>

      <div className={styles.options}>
        <ul>
          <li> تعرفه قانونی </li>
          <li> دسترسی سریع </li>
          <li> مشاورین خبره </li>
          <li> قولنامه محضری </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
