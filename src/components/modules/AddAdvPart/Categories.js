import styles from "@/AddAdvPart/Categories.module.scss";
import CategoryButton from "@/elements/CategoryButton";

function Categories({ data, changeHandler }) {
  return (
    <div className={styles.categoryPart}>
      <p> دسته بندی </p>

      <div className={styles.categories}>
        <CategoryButton
          type="ویلا"
          category={data.category}
          changeHandler={changeHandler}
        />
        <CategoryButton
          type="آپارتمان"
          category={data.category}
          changeHandler={changeHandler}
        />
        <CategoryButton
          type="مغازه"
          category={data.category}
          changeHandler={changeHandler}
        />
        <CategoryButton
          type="دفتر"
          category={data.category}
          changeHandler={changeHandler}
        />
      </div>
    </div>
  );
}

export default Categories;
