import React from 'react'
import Image from 'next/image'
import addToFav from '../../assets/images/addToFav.svg'
import styles from './index.module.scss'
const AddToFav = () => {
  return (
    <div className={styles.add_To_Fav_button}>
      <Image src={addToFav} width={49} height={49} alt="addToFav.svg" />
    </div>
  )
}

export default AddToFav