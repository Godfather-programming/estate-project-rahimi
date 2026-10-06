import Link from "next/link";
import { MdOutlinePlace } from "react-icons/md";
import { FiArrowLeftCircle } from "react-icons/fi";
import styles from "@/modules/BuyResidentialMain.module.scss";
import { sp } from "@/utils/replaceNumber";
import { icons } from "@/src/constants/icons";

function BuyResidnetialMain({ finalData }) {
  return (
    <div className={styles.container}>
      {finalData.map((item) => (
        <div className={styles.wrapper} key={item._id}>
          <span className={styles.icon}>{icons[item.category]}</span>
          <p className={styles.article}> {item.article} </p>
          <div className={styles.place}>
            <span>
              {" "}
              <MdOutlinePlace size={20} />{" "}
            </span>
            <span> {item.address} </span>
          </div>
          <p className={styles.price}> {sp(item.price)} تومان </p>
          <Link
            href={`/buy-residential/details/${item._id}`}
            className={styles.visit}
          >
            <span> مشاهده آگهی </span>
            <span>
              {" "}
              <FiArrowLeftCircle size={20} />{" "}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BuyResidnetialMain;
