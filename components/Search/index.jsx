import React, { useState } from "react";
import styles from "./index.module.scss";
import Line from "../../assets/images/Line.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([
    { id: 1, value: "Wallpapers" },
    { id: 2, value: "Textures & Patterns" },
    { id: 3, value: "Nature" },
    { id: 4, value: "Current" },
    { id: 5, value: "Events" },
    { id: 6, value: "Architecture" },
    { id: 7, value: "Business & Work" },
    { id: 8, value: "Film" },
    { id: 9, value: "Animals" },
    { id: 10, value: "Travel" },
    { id: 11, value: "Fashion" },
    { id: 12, value: "Food & Drink" },
    { id: 13, value: "Spirituality" },
    { id: 14, value: "Experimental" },
    { id: 15, value: "People" },
    { id: 16, value: "Health" },
    { id: 17, value: "Arts & Culture" },
    { id: 18, value: "People" },
  ]);


  return (
    <div className={styles.main_wrapper}>
      <div className={styles.search_component}>
        <div className={styles.search_inner_content}>
          <h1 className={styles.search_text}> {router.pathname !== '/history' ? 'Поиск' : 'Ваши запросы'} </h1>
          <Image src={Line} width={1200} height={1} alt="Line" />
          <div className={styles.search_categories}>
            {categories.map((obj) => (
              <p key={obj.id}>{obj.value}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;