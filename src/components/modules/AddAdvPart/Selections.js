import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineAddToPhotos } from "react-icons/md";
import styles from "@/modules/AddAdvPart/Selections.module.scss";

function Selections({ title, data, setData, type }) {
  const changeTypesHandler = (e, index) => {
    const { value } = e.target;
    const newType = [...data[type]];
    newType[index].text = value
    setData({...data, [type]: newType})
  };

  const deleteTypesHandler = (e, index) => {
    e.preventDefault();
    const eliminatedType = data[type].splice(index, 1);
    setData({ ...data });
  };

  const addTypesHandler = (e) => {
    e.preventDefault();
    setData({...data, [type]: [...data[type], {text: ""}]})
  };
  return (
    <div className={styles.facilities}>
      <p> {title} </p>
       {data[type].map((item, index) => (
          <div className={styles.options} key={index}>
               <input
                type="text"
                className={styles.option}
                value={item.text}
                onChange={(e) => changeTypesHandler(e, index)}
              />
              <button
                className={styles.delete}
                onClick={(e) => deleteTypesHandler(e, index)}
              >
                {" "}
                <span> حذف </span> <AiOutlineDelete size={18} />{" "}
              </button>
            </div>
       ))}

      <button onClick={addTypesHandler}>
        {" "}
        افزودن <MdOutlineAddToPhotos size={18} />{" "}
      </button>
    </div>
  );
}

export default Selections;