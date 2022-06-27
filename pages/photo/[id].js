import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'
import User from '../../components/User'
import axios from 'axios'
import AddToFav from '../../components/MyButtonFav'
import MyDownloadButton from '../../components/MyDownloadButton'
import { useRouter } from 'next/router'
import MainContainer from '../../components/MainContainer/MainContainer'
import SimilarPhotos from '../../components/SimilarPhotos'

const Photo = ({ photo, user, urlPhotoClicked }) => {
    const router = useRouter()
    console.log(photo);
    return (
        <MainContainer>
            <div className={styles.choosen_photo} style={{ backgroundImage: `url(${photo.urls.full})` }}>
            </div>
            <div className={styles.main_foto_content}>
                <div className={styles.top_block_photo}>
                    <div className={styles.main_wrapper}>
                        <div className={styles.photo_section_user_buttons}>
                            <div className={styles.user_icon_name_email}>
                                <User user={user} />
                            </div>
                            <div className={styles.button_addFav_download}>
                                <div className={styles.add_to_favorites}>
                                    <AddToFav />
                                </div>
                                <div className={styles.button_download}>
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
            {/* <SimilarPhotos /> */}
            {/* {/*relatedPhotos={relatedPhotos}*/}
        </MainContainer >
    )
}

export default Photo

export async function getServerSideProps(context) {
    const key = "NxML6MlGxgeDJlxdq5HHehNtdnvH6qWe7eTN7w7bpfE";
    const url = `https://api.unsplash.com/photos/${context.query.id}?client_id=${key}&per_page=22`;
    const { data } = await axios.get(url);
    // const urlRelated = `https://api.unsplash.com/photos/${context.related_collections.type}?client_id=${key}&per_page=22`;
    // const dataRelated = await axios.get(urlRelated);
    const urlUser = `https://api.unsplash.com/users/me?client_id=${key}`;
    const response = await axios.get(urlUser, { params: { tags: 'tags' } });
    const user = response.data
    return {
        props: {
            photo: data,
            // relatedPhotos: dataRelated,
            user: user
        },
    };
}

