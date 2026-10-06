import Link from "next/link";
import { LuTypeOutline } from "react-icons/lu";
import styles from "@/modules/BuyResidentialAside.module.scss";
import { queries } from "@/constants/queries";

function BuyResidentialAside() {
  return (
    <div className={styles.container}>
      <p className={styles.category}>
        {" "}
        <span>
          {" "}
          <LuTypeOutline color="#0500ff" size={18} />{" "}
        </span>
        <span> دسته بندی </span>
      </p>
      <ul className={styles.types}>
        <Link href="/buy-residential">
          <li> همه </li>
        </Link>

        {queries.map((query) => (
          <Link
            href={{
              pathname: "buy-residential",
              query: { category: Object.keys(query) },
            }}
            key={Object.keys(query)}
          >
            <li> {Object.values(query)} </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default BuyResidentialAside;
