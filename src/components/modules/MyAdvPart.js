import Link from "next/link";
import { FiArrowLeftCircle } from "react-icons/fi";
import { MdOutlinePlace } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/modules/MyAdvPart.module.scss";
import DeleteButton from "@/elements/DeleteButton";
import { sp } from "@/utils/replaceNumber";
import { icons } from "@/constants/icons";

function MyAdvPart({ profiles }) {
  return (
    <div className={styles.container}>
      {profiles.map((item) => (
        <div className={styles.wrapper} key={item._id}>
          <div className={styles.adv}>
            <div className={styles.type}>
              {" "}
              <span className={styles.icon}>{icons[item.category]}</span>{" "}
              <Link href={`/buy-residential/details/${item._id}`}>
                <span className={styles.visit}>
                  {" "}
                  <span> مشاهده آگهی </span>
                  <span>
                    {" "}
                    <FiArrowLeftCircle size={18} />{" "}
                  </span>{" "}
                </span>{" "}
              </Link>
            </div>
            <p> {item.article} </p>
            <div className={styles.place}>
              <span>
                {" "}
                <MdOutlinePlace size={18} />{" "}
              </span>
              <span>{item.address}</span>
            </div>
            <p> {sp(item.price)} تومان </p>
          </div>

          <div className={styles.buttons}>
            <Link href={`/dashbord/my-adv/edit/${item._id}`}>
              <button className={styles.edit}>
                <span> ویرایش </span>
                <span>
                  {" "}
                  <FiEdit size={18} />{" "}
                </span>
              </button>
            </Link>

            <DeleteButton type={"آگهی من"} item={item} toast={toast} />
          </div>
        </div>
      ))}

      {!profiles.length ? (
        <div className={styles.none}>
          <p> هیچ آگهی ثبت نکرده اید </p>
        </div>
      ) : null}
      <Toaster />
    </div>
  );
}

export default MyAdvPart;
