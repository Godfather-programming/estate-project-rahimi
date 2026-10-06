"use client";

import { Toaster } from "react-hot-toast";
import styles from "@/AddAdvPart/LoadingButton.module.scss";
import Loader from "@/modules/Loader";
import { centerStyles } from "@/constants/styles";

function LoadingButton({ value, handler, loading }) {
  return (
    <>
      {loading ? (
        <div style={centerStyles}>
          <Loader />
        </div>
      ) : value === "ویرایش" ? (
        <button className={styles.register} onClick={handler}>
          {value} آگهی
        </button>
      ) : (
        <button type="submit" className={styles.register} onClick={handler}>
          {value} آگهی
        </button>
      )}
      <Toaster />
    </>
  );
}

export default LoadingButton;
