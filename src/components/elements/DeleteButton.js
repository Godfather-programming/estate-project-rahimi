"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "@/elements/DeleteButton.module.scss";
import Loader from "@/modules/Loader";

function DeleteButton({ type, item, toast }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const deleteHandler = async (item) => {
    setLoading(true);
    const res = await fetch(`/api/profile/delete/${item._id}`, {
      method: "DELETE",
    });
    const information = await res.json();
    setLoading(false);
    if (res.status === 200) {
      toast.success(information.message);
      router.refresh();
    } else {
      toast.error(information.error);
    }
  };
  return (
    <>
      {loading ? (
        <Loader type={type} />
      ) : (
        <>
          <button
            className={type === "آگهی من" ? styles.delete : null}
            onClick={(e) => deleteHandler(item)}
          >
            <span> حذف آگهی </span>
            <span className={styles.trash}>
              {" "}
              <AiOutlineDelete size={18} />{" "}
            </span>
          </button>
        </>
      )}
    </>
  );
}

export default DeleteButton;
