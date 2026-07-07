"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { sliderInstagramSettings } from "@/app/utils/common";
import { dataInstagram } from "@/app/utils/data";
import styles from "@/styles/instagram-slider/index.module.scss";

const InstagramSlider = () => {
  return (
    <section className={styles.instagram_slider}>
      <div className="container-wide">
        <div className={styles.instagram_slider__wrapper}>
          <Swiper {...sliderInstagramSettings} className="swiper-instagram">
            {dataInstagram.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className={styles.instagram_slider__slide__wrapper}
              >
                <div className={styles.instagram_slider__slide}>
                  <a
                    href={slide.link}
                    className={styles.instagram_slider__link}
                  >
                    <Image
                      width={590}
                      height={590}
                      className={styles.instagram_slider__image}
                      src={slide.image}
                      alt={slide.title}
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default InstagramSlider;
