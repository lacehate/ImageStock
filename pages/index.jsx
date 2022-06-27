import React, { useState } from "react";
import styles from "./index.module.scss";
import { Search } from "../components/Search/index.jsx";
import flexView from "../assets/images/flexView.svg";
import flexViewInactive from "../assets/images/flexViewInactive.svg";
import blockView from "../assets/images/blockView.svg";
import blockViewInactive from "../assets/images/blockViewInactive.svg";
import Image from "next/image.js";
import Link from "next/link";
import axios from "axios";
import MainContainer from "../components/MainContainer/MainContainer.jsx";

function Home({ photos }) {
  const [activeButtonBlockView, setActiveButtonBlockView] = useState(false);
  const [activeButtonFlexView, setActiveButtonFlexView] = useState(true);
  function switchBlockView() {
    setActiveButtonBlockView(true);
    setActiveButtonFlexView(false);
  }
  function switchFlexView() {
    setActiveButtonBlockView(false);
    setActiveButtonFlexView(true);
  }

  return (
    <MainContainer>
      <Search />
      <div className={styles.button_block}>
        <div className={styles.switch_view_button_block}>
          <div className={styles.blockView}>
            {activeButtonBlockView ? (
              <Image
                onClick={() => switchBlockView()}
                src={blockView}
                width={23}
                height={23}
                alt=""
              />
            ) : (
              <Image
                onClick={() => switchBlockView()}
                src={blockViewInactive}
                width={23}
                height={23}
                alt=""
              />
            )}
          </div>
          <div className={styles.flexView}>
            {activeButtonFlexView ? (
              <Image
                onClick={() => switchFlexView()}
                src={flexView}
                width={23}
                height={23}
                alt=""
              />
            ) : (
              <Image
                onClick={() => switchFlexView()}
                src={flexViewInactive}
                width={23}
                height={23}
                alt=""
              />
            )}
          </div>
        </div>
      </div>

      <section className={styles.section_photo}>
        <div className={styles.main_wrapper}>
          {photos.map((item) => {
            return (
              <Link
                photos={photos}
                href={`/photo/[id]`}
                as={`/photo/${item.id}`}
                key={item.id}
              >
                <div
                  className={styles.single_photo}
                  style={{ backgroundImage: `url(${item.urls.small})` }}
                ></div>
              </Link>
            );
          })}
        </div>
      </section>
    </MainContainer>
  );
}
export default Home;

export const getStaticProps = async () => {
  const key = "NxML6MlGxgeDJlxdq5HHehNtdnvH6qWe7eTN7w7bpfE";
  const url = `https://api.unsplash.com/photos?client_id=${key}&per_page=22`;
  const { data } = await axios.get(url,{params: {tags: 'tags'}});
  return {
    props: {
      photos: data,
    },
  };
};
