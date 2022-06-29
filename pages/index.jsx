import React, { useState } from "react";
import styles from "./index.module.scss";
import Search from "../components/Search";
import flexView from "../assets/images/flexView.svg";
import flexViewInactive from "../assets/images/flexViewInactive.svg";
import blockView from "../assets/images/blockView.svg";
import blockViewInactive from "../assets/images/blockViewInactive.svg";
import Image from "next/image.js";
import axios from "axios";
import MainContainer from "../components/MainContainer/MainContainer.jsx";
import Gallery from "../components/gallery";

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
      <div className="main_wrapper">
        {console.log(photos)}
        <Gallery photos={photos} />
      </div>
    </MainContainer>
  );
}
export default Home;

export const getStaticProps = async () => {
  const key = "NxML6MlGxgeDJlxdq5HHehNtdnvH6qWe7eTN7w7bpfE";
  const url = `https://api.unsplash.com/photos?client_id=${key}&per_page=22`;
  const { data } = await axios.get(url);
  return {
    props: {
      photos: data,
    },
  };
};
