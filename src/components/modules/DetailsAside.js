import Link from "next/link";
import { MdRealEstateAgent } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa6";
import toast from "react-hot-toast";
import styles from "@/modules/DetailsAside.module.scss";
import SharingButton from "@/elements/SharingButton";
import PublishButton from "@/elements/PublishButton";
import connectDB from "@/utils/connectDB";
import { e2p, sp } from "@/utils/replaceNumber";
import { icons } from "@/constants/icons";

async function DetailsAside({ intendedProfile }) {
  const {
    firm,
    phoneNumber,
    category,
    article,
    price,
    constructionDate,
    published,
  } = intendedProfile;

  await connectDB();

  const date = new Date(constructionDate).toLocaleDateString("fa-IR");

  return (
    <div className={styles.container}>
      <div className={styles.estate}>
        <span>
          {" "}
          <MdRealEstateAgent size={40} color="#0500ff" />{" "}
        </span>
        <p> املاک {firm} </p>
        <div className={styles.phoneNumber}>
          {" "}
          <span>
            {" "}
            <AiOutlinePhone size={18} />{" "}
          </span>{" "}
          <span> {e2p(phoneNumber)} </span>{" "}
        </div>
      </div>

      <SharingButton />

      <div className={styles.specifications}>
        <div className={styles.category}>
          {" "}
          <span>{icons[category]}</span> <span> {article} </span>
        </div>
        <p> {sp(price)} تومان </p>
        <div className={styles.Date}>
          <span>
            {" "}
            <FaCalendarCheck size={18} color="#0500ff" />{" "}
          </span>
          <span> {date} </span>
        </div>
      </div>

      {published ? null : (
        <div className={styles.publish}>
          <Link href="/admin">
            <PublishButton
              item={JSON.parse(JSON.stringify(intendedProfile))}
              toast={toast}
            />
          </Link>
        </div>
      )}
    </div>
  );
}

export default DetailsAside;
