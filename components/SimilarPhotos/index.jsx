import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import axios from "axios";

const SimilarPhotos = ({  relatedPhotos }) => {
    console.log( relatedPhotos);
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.similar_photos_title}>
        <div className={styles.similar_photos_text}>
          <p>Похожие фотографии</p>
        </div>
        <div className={styles.similar_photos_show_more}>
          <p> show more</p>
        </div>
      </div>
      {/* <section className={styles.section_photo}>
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
      </section> */}
    </div>
  );
};

export default SimilarPhotos;

// export async function getStaticProps(context) {
//   const key = "NxML6MlGxgeDJlxdq5HHehNtdnvH6qWe7eTN7w7bpfE";
//   const url = `https://api.unsplash.com/photos/?client_id=${key}&per_page=22`;
//   const { data } = await axios.get(url);
//   return {
//     props: {
//       photos: data,
//     },
//   };
// }
