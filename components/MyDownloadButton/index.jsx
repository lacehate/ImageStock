import React from "react";
import downloadArrow from "../../assets/images/downloadArrow.svg";
import styles from "./index.module.scss";
import Image from "next/image";

const DownLoadButton = () => {
  return (
    <div className={styles.downLoad_button}>
      <div className={styles.download_arrow_img}>
        <Image
          src={downloadArrow}
          width={34}
          height={34}
          alt="downloadArrow.svg"
        />
      </div>
      <div className={styles.download_button_text}>Download</div>
    </div>
  );
};

export default DownLoadButton;
