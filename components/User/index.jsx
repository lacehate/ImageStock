import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const User = ({ user }) => {
  return (
    <div>
      <div className={styles.user_info}>
        <div className={styles.user_profile_picture}>
          <img
            className={styles.user_profile_img}
            src={user.profile_image.large}
          />
        </div>
        <div className={styles.user_name_email}>
          <div className={styles.user_full_name}> {user.name} </div>
          <div className={styles.user_email}> {user.links.self} </div>
        </div>
      </div>
    </div>
  );
};

export default User;

export const getStaticProps = async () => {
  const keyUnsplash = "NxML6MlGxgeDJlxdq5HHehNtdnvH6qWe7eTN7w7bpfE";
  const urlUser = `https://api.unsplash.com//users/me?client_id=${keyUnsplash}`;
  const { data } = await axios.get(urlUser, { params: { Email: "email" } });
  return {
    props: {
      user: data,
    },
  };
};
