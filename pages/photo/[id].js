import React from 'react';
import styles from './index.module.scss';
import User from '../../components/User';
import axios from 'axios';
import AddToFav from '../../components/MyButtonFav';
import MyDownloadButton from '../../components/MyDownloadButton';
import MainContainer from '../../components/MainContainer/MainContainer';
import Gallery from "../../components/gallery";

const Photo = ({ photo }) => {
  return (
    <MainContainer>
      <div className={styles.choosen_photo} style={{ backgroundImage: `url(${photo.urls.full})` }}>
      </div>
      <div className={styles.main_foto_content}>
        <div className={styles.top_block_photo}>
          <div className={styles.main_wrapper}>
            <div className={styles.photo_section_user_buttons}>
              <div className={styles.user_icon_name_email}>
                <User user={photo.user} />
              </div>
              <div className={styles.button_addFav_download}>
                <div className={styles.add_to_favorites}>
                  <AddToFav />
                </div>
                <div>
                  <MyDownloadButton />
                </div>
              </div>
            </div>
            <div className={styles.centered_photo} style={{ backgroundImage: `url(${photo.urls.full})` }}>

            </div>
            <div className={styles.photo_similar_tags}>
              <p className={styles.photo_similar_tags_text}>Похожие теги</p>
            </div>
            <div className={styles.photo_tags}>
              {photo.tags.map((item) => {
                return (
                  <button key={item.title} className={styles.tags_background}><p className={styles.related_tags}>{item.title}</p> </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.similar_photos_title}>
        <p className={styles.similar_photos_text}>Похожие фотографии</p>
        <p className={styles.similar_photos_show_more}>show more</p>
      </div>
      <div className="main_wrapper">
        <Gallery photos={photo.related_collections.results.map((el => (el.cover_photo)))} />
      </div>
    </MainContainer >
  )
}

export default Photo

export async function getServerSideProps(context) {
  const key = "NxML6MlGxgeDJlxdq5HHehNtdnvH6qWe7eTN7w7bpfE";
  const url = `https://api.unsplash.com/photos/${context.query.id}?client_id=${key}&per_page=22`;
  const { data } = await axios.get(url);
  return {
    props: {
      photo: data,
    },
  };
}

