"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/templates/SignupPage.module.scss";
import SigninInput from "@/elements/SigninInput";
import Loader from "@/modules/Loader";

function SigninPage() {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
    loading: false,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    setData({ ...data, loading: true });
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    setData({ ...data, loading: false });
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };
  return (
    <div className={styles.container}>
      <h2> فرم ورود </h2>

      <form className={styles.form} style={{ height: "300px" }}>
        <SigninInput
          label="ایمیل"
          type="text"
          name="email"
          value={data.email}
          changeHandler={changeHandler}
        />
        <SigninInput
          label="رمزعبور"
          type="text"
          name="password"
          value={data.password}
          changeHandler={changeHandler}
        />

        {data.loading ? (
          <Loader />
        ) : (
          <button onClick={loginHandler}> ورود </button>
        )}
      </form>

      <div className={styles.situation}>
        <span> حساب کاربری ندارید؟ </span>
        <div>
          <Link href="/signup">
            <span className={styles.entrance}> ثبت نام </span>
          </Link>
          <span className={styles.line} style={{ width: "49px" }}>
            {" "}
          </span>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default SigninPage;
