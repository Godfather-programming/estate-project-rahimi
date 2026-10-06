import styles from "@/modules/Options.module.scss";

function Options({ options }) {
  return (
    <div className={styles.container}>
      {options?.length ? (
        <>
          <ul>
            {options?.map((item) => (
              // <li key={item._id}> {item.text ? item.text : item.sentence} </li> 
              <li key={item._id}> {item.text} </li>
            ))}
          </ul>
        </>
      ) : (
        <p> هیچ موردی ذکر نشده است! </p>
      )}
    </div>
  );
}

export default Options;
