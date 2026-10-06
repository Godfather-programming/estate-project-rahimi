"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "@/elements/PublishButton.module.scss";
import Loader from "@/modules/Loader";

function PublishButton({ item, toast }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const publishedHandler = async (item) => {
    setLoading(true);
    const res = await fetch(`/api/admin/${item._id}`, {
      method: "PATCH",
      // body: JSON.stringify(item._id),
      headers: { "Content-Type": "application/json" },
    });

    const inforamtion = await res.json();
    setLoading(false);
    if (res.status === 200) {
      toast.success(inforamtion.message);
      router.refresh();
    } else {
      toast.error(inforamtion.error);
    }
  };
  return (
    <>
      {loading ? (
        <Loader type="ادمین" />
      ) : (
          <button
            className={styles.publish}
            onClick={() => publishedHandler(item)}
          >
            {" "}
            انتشار{" "}
          </button>
      )}
    </>
  );
}

export default PublishButton;
