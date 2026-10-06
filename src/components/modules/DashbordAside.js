import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
import styles from "@/modules/DashbordAside.module.scss";
import SignoutButton from "@/elements/SignoutButton";

function DashbordAside({ email, role }) {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <IoPersonCircleOutline size={40} color="#0500ff" />
        {role === "ADMIN" ? <p> Admin </p> : null}
        <span className={styles.email}> {email} </span>
        <span className={styles.line}> </span>
      </div>

      <div className={styles.options}>
        <ul>
          <Link href="/dashbord">
            {" "}
            <li> حساب کاربری </li>{" "}
          </Link>
          <Link href="/dashbord/my-adv">
            {" "}
            <li> آگهی های من </li>{" "}
          </Link>
          <Link href="/dashbord/add-adv">
            {" "}
            <li> ثبت آگهی </li>{" "}
          </Link>
          {role === "ADMIN" ? (
            <Link href="/admin">
              {" "}
              <li> در انتظار تایید </li>{" "}
            </Link>
          ) : null}
        </ul>
      </div>

      <SignoutButton />
    </div>
  );
}

export default DashbordAside;
