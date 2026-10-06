import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import styles from "@/AddAdvPart/Dates.module.scss";
import { dateStyle } from "@/constants/styles";

function Dates({ data, setData }) {
  const dateHandler = (e) => {
    const date = new Date(e);
    setData({ ...data, constructionDate: date });
  };

  const date1 = new Date(data.constructionDate).toLocaleDateString("fa-IR");
  return (
    <div style={{ marginTop: "20px" }} className={styles.date}>
      <p> تاریخ ساخت </p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        placeholder={date1}
        value={data.constructionDate} // check it
        onChange={dateHandler}
        calendarPosition="bottom-right"
        style={dateStyle}
      />
    </div>
  );
}

export default Dates;
