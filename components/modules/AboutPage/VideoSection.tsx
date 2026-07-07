"use client";
import React, { useState } from "react";
import styles from "@/styles/about/index.module.scss";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const VideoSection = () => {
  const [toggler, setToggler] = useState<boolean>(false);
  const isMedia480 = useMediaQuery(480);
  return (
    <section className={styles.video}>
      <div className="container">
        <div className={styles.video__wrapper}>
          {!isMedia480 && <Image
            src="/img/about/video-img.jpg"
            className={styles.video__img}
            alt="Video image"
            width={1200}
            height={444}
          />}
          {isMedia480 && <Image
            src="/img/about/video-img-sm.jpg"
            className={styles.video__img_sm}
            alt="Video image"
            width={440}
            height={444}
          />}
          <a
            className={styles.video__link}
            href="#"
            onClick={() => setToggler(!toggler)}
          >
            <Image
              width={95}
              height={95}
              className={styles.video__play_btn}
              src="/img/about/play-btn.svg"
              alt=""
            />
          </a>
          <FsLightbox
            toggler={toggler}
            sources={["https://www.youtube.com/watch?v=F6CJtIk457g"]}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
