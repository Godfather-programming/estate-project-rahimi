"use client";

import styles from "@/elements/SingoutButton.module.scss";
import { RxExit } from "react-icons/rx";
import { signOut } from "next-auth/react";

function SignoutButton() {
  return (
    <div className={styles.exit} onClick={signOut}>
      <RxExit size="25px" />
      <span> خروج </span>
    </div>
  );
}

export default SignoutButton;
