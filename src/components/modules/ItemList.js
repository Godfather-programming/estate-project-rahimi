import styles from "@/modules/ItemList.module.scss";
import Options from "@/modules/Options";
import Title from "@/modules/Title";

function ItemList({ title, data }) {
  return (
    <div className={styles.amenities}>
      <Title> {title} </Title>
      <span className={styles.line}></span>
      <Options options={data} />
    </div>
  );
}

export default ItemList;
