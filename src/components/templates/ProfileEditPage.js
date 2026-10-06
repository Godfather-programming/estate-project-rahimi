"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "@/templates/AddAdvPage.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import Specifiation from "@/modules/AddAdvPart/Specification";
import Categories from "@/modules/AddAdvPart/Categories";
import Dates from "@/modules/AddAdvPart/Dates";
import LoadingButton from "@/modules/AddAdvPart/LoadingButton";
import Selections from "@/modules/AddAdvPart/Selections";

function ProfileEditPage({ data, profileId, email, role }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [information, setInformation] = useState({
    _id: data._id,
    article: data.article,
    explanations: data.explanations,
    address: data.address,
    phoneNumber: data.phoneNumber,
    price: data.price,
    firm: data.firm,
    category: data.category,
    constructionDate: data.constructionDate,
    SEO: data.SEO,
    amenities: data.amenities,
    rules: data.rules,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInformation({ ...information, [name]: value });
  };

  const editHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/profile/edit/${profileId}`, {
      method: "PUT",
      body: JSON.stringify({ information }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 200) {
      toast.success(data.message);
      router.push("/dashbord/my-adv");
    } else {
      return toast.error(data.error);
    }
  };
  if (data)
    return (
      <div className={styles.container}>
        <div className={styles.aside}>
          <DashbordAside email={email} role={role} />
        </div>

        <div className={styles.main}>
          <div className={styles.record}>
            <p> ویرایش آگهی</p>
          </div>

          <div className={styles.wrapper}>
            <form className={styles.form}>
              <Specifiation
                data={information}
                changeHandler={changeHandler}
                setData={setInformation}
              />

              <Categories data={information} changeHandler={changeHandler} />

              <Selections
                title="امکانات رفاهی"
                data={information}
                setData={setInformation}
                type="amenities"
              />

              <Selections
                title="قوانین"
                data={information}
                setData={setInformation}
                type="rules"
              />

              <Dates data={information} setData={setInformation} />

              <LoadingButton
                loading={loading}
                data={information}
                value="ویرایش"
                handler={editHandler}
              />
            </form>
          </div>
        </div>
      </div>
    );
}

export default ProfileEditPage;
