import { Swiper, SwiperSlide } from "swiper/react";
import banner from "@/public/img/main-page/hero/banner.jpg";
import styles from "@/styles/main-page/index.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { sliderHeroSettings } from "@/app/utils/common";
import HeroSlide from "./HeroSlide";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Новинка!",
      href: "/new-product",
      text: "Зустрічайте нову колекцію кульок для ванни",
      image: banner,
    },
    {
      id: 2,
      title: "Новинка!",
      href: "/new-product",
      text: "Зустрічайте нову колекцію кульок для ванни",
      image: banner,
    },
    {
      id: 3,
      title: "Новинка!",
      href: "/new-product",
      text: "Зустрічайте нову колекцію кульок для ванни",
      image: banner,
    },
  ];

  return (
    <section className={styles.hero}>
      <div className="container-wide">
        <Swiper
          {...sliderHeroSettings}
          navigation={true}
          modules={[Navigation]}
          className={styles.hero__slider}
        >
          {slides.map((slide) => (
            <SwiperSlide className={styles.hero__slider__slide} key={slide.id}>
              <HeroSlide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
