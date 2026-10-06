"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import styles from "@/templates/AddAdvPage.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import Specifiation from "@/modules/AddAdvPart/Specification";
import Categories from "@/modules/AddAdvPart/Categories";
import Dates from "@/modules/AddAdvPart/Dates";
import LoadingButton from "@/modules/AddAdvPart/LoadingButton";
import Selections from "../modules/AddAdvPart/Selections";

function AddAdvPage({ email, role }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    article: "",
    explanations: "",
    address: "",
    phoneNumber: "",
    price: "",
    firm: "",
    category: "",
    constructionDate: new Date(),
    SEO: { title: "", description: "", phoneCall: "" },
    amenities: [],
    rules: [],
    published: "false",
    email,
  });
  

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const addAdvHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const inforamtion = await res.json();
    setLoading(false);
    if (res.status === 200) {
      toast.success(inforamtion.message);
      setData({
        article: "",
        explanations: "",
        address: "",
        phoneNumber: "",
        price: "",
        firm: "",
        category: "",
        constructionDate: new Date(),
        SEO: { title: "", description: "", phoneCall: "" },
        amenities: [],
        rules: [],
        published: "false",
        email,
      });
    } else {
      toast.error(inforamtion.error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <DashbordAside email={email} role={role} />
      </div>

      <div className={styles.main}>
        <div className={styles.record}>
          <p> ثبت آگهی </p>
        </div>

        <div className={styles.wrapper}>
          <form className={styles.form}>
            <Specifiation
              data={data}
              setData={setData}
              changeHandler={changeHandler}
            />

            <Categories data={data} changeHandler={changeHandler} />

            <Selections
              title="امکانات رفاهی"
              data={data}
              setData={setData}
              type="amenities"
            />

            <Selections
              title="قوانین"
              data={data}
              setData={setData}
              type="rules"
            />

            <Dates data={data} setData={setData} />

            <LoadingButton
              data={data}
              value="ثبت"
              handler={addAdvHandler}
              loading={loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAdvPage;
