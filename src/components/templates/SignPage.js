"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/templates/SignupPage.module.scss";
import SigninInput from "@/elements/SigninInput";
import Loader from "@/modules/Loader";

function SignPage() {
  const router = useRouter();

  const [information, setInformation] = useState({
    email: "",
    password: "",
    repeatedPassword: "",
    loading: false,
  });

  const changeHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setInformation({ ...information, [name]: value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();

    if (information.password !== information.repeatedPassword) {
      toast.error("رمز عبور و تکرار آن برابر نیست!");
      return;
    }

    setInformation({ ...information, loading: true });
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email: information.email,
        password: information.password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setInformation({ ...information, loading: false });

    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };
  return (
    <div className={styles.container}>
      <h2> فرم ثبت نام </h2>

      <form className={styles.form}>
        <SigninInput
          label="ایمیل"
          type="text"
          name="email"
          value={information.email}
          changeHandler={changeHandler}
        />
        <SigninInput
          label="رمزعبور"
          type="text"
          name="password"
          value={information.password}
          changeHandler={changeHandler}
        />
        <SigninInput
          label="تکرار رمزعبور"
          type="text"
          name="repeatedPassword"
          value={information.repeatedPassword}
          changeHandler={changeHandler}
        />

        {information.loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={registerHandler}>
            {" "}
            ثبت نام{" "}
          </button>
        )}
      </form>

      <div className={styles.situation}>
        <span> حساب کاربری دارید؟ </span>
        <div>
          <Link href="/signin">
            <span className={styles.entrance}> ورود </span>
          </Link>
          <span className={styles.line}> </span>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default SignPage;