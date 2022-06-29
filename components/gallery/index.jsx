import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import FavoriteIcon from "../../assets/images/favorite.svg";
import MaximizeIcon from "../../assets/images/maximize.svg";
import DownloadIcon from "../../assets/images/downloadArrow.svg";
import Image from "next/image";
import axios from "axios";

const Gallery = ({ photos }) => {
  const [data, setData] = useState(photos);

  useEffect(() => {
    let column = 1;
    const _data = photos.map((el) => {
      el.column = column;
      if (column === 3) {
        column = 0;
      }
      column++;
      return el;
    });
    setData(_data);
  }, [photos]);

  async function likeImage(id) {
    const key = "NxML6MlGxgeDJlxdq5HHehNtdnvH6qWe7eTN7w7bpfE";
    const url = `https://api.unsplash.com/photos/${id}/download?client_id=${key}`;
    await axios.get(url);
  }

  return (
    <div className={styles.gallery_wrapper}>
      {[1, 2, 3].map((column) => (
        <div key={column} className={styles.column}>
          {data.map(
            (photo) =>
              column === photo.column && (
                <Link href={`/photo/${photo.id}`} key={photo.id}>
                  <div className={styles.single_photo}>
                    <img
                      className={styles.single_photo__image}
                      src={photo.urls.small}
                      alt=""
                    />
                    <div className={styles.single_photo__hover}>
                      <img
                        className={styles.single_photo__hover__avatar}
                        src={photo.user.profile_image.medium}
                        alt=""
                        width={70}
                        height={70}
                      />
                      <p className={styles.single_photo__hover__name}>
                        {photo.user.name}
                      </p>
                      <p className={styles.single_photo__hover__username}>
                        @{photo.user.username}
                      </p>
                      <div className={styles.single_photo__hover__actions}>
                        <div onClick={() => likeImage(photo.id)}>
                          <Image
                            src={FavoriteIcon}
                            alt=""
                            width={30}
                            height={30}
                          />
                        </div>
                        <div>
                          <Image
                            src={MaximizeIcon}
                            alt=""
                            width={36}
                            height={36}
                          />
                        </div>
                        <div>
                          <Image
                            src={DownloadIcon}
                            alt=""
                            width={36}
                            height={36}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
