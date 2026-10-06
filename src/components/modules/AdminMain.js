import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/modules/AdminMain.module.scss";
import PublishButton from "@/elements/PublishButton";
import DeleteButton from "@/elements/DeleteButton";
import { sp } from "@/utils/replaceNumber";

function AdminMain({ profiles }) {
  return (
    <div className={styles.container}>
      {profiles.map((item) => (
        <div className={styles.wrapper} key={item._id}>
          <h3> {item.article} </h3>
          <p> {item.description} </p>
          <div className={styles.charactristics}>
            <span> {item.address} </span>
            <span> {sp(item.price)} تومان </span>
          </div>

          <div className={styles.options}>
            <PublishButton
              item={JSON.parse(JSON.stringify(item))}
              toast={toast}
            />

            <Link href={`/buy-residential/details/${item._id}`}>
              {" "}
              مشاهده جزئیات{" "}
            </Link>

            <DeleteButton
              type="ادمین"
              item={JSON.parse(JSON.stringify(item))}
              toast={toast}
            />
          </div>

          <div className={styles.seo}>
            <p> اطلاعات SEO </p>
            <div className={styles.data}>
              <span> عنوان: {item.SEO.title} </span>
              <span> توضیحات: {item.SEO.description} </span>
              <span> شماره تماس: {item.SEO.phoneCall} </span>
            </div>
          </div>

          <span className={styles.line}></span>
        </div>
      ))}

      {!profiles.length ? (
        <p className={styles.empty}> هیچ آگهی برای انتشار وجود ندارد </p>
      ) : null}
      <Toaster />
    </div>
  );
}

export default AdminMain;
