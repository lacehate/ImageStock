import React from "react";
import styles from "./index.module.scss";

const User = ({ user }) => {
  return (
    <div className={styles.user_info}>
      <div className={styles.user_profile_picture}>
        <img
          className={styles.user_profile_img}
          src={user.profile_image.large}
        />
      </div>
      <div className={styles.user_name_email}>
        <div className={styles.user_full_name}> {user.name} </div>
        <div className={styles.user_email}> @{user.username} </div>
      </div>
    </div>
  );
};

export default User;