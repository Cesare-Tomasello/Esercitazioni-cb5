import styles from "../../styles/gallery.module.scss";
import React from "react";
import Image from "next/image";

function Gallery() {
  return (
    <div className={styles.Gallery}>
      <Image
        src="https://picsum.photos/1920/1080?1"
        alt="hero image"
        width={500}
        height={0}
        priority={true}
      />
      <Image
        src="https://picsum.photos/1920/1080?2"
        alt="hero image"
        width={500}
        height={0}
        priority={true}
      />
      <Image
        src="https://picsum.photos/1920/1080?3"
        alt="hero image"
        width={500}
        height={0}
        priority={true}
      />
    </div>
  );
}

export default Gallery;
