import React from "react";
import Image from "next/image";
import addToFav from "../../assets/images/addToFav.svg";
const AddToFav = () => {
  return <Image src={addToFav} width={49} height={49} alt="addToFav.svg" />;
};

export default AddToFav;
