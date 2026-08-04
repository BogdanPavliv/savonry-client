"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import skeletonStyles from "@/styles/skeleton/index.module.scss";
import styles from "@/styles/main-page/index.module.scss";
import Link from "next/link";
import Image from "next/image";
import { basePropsForMotion } from "@/constants/motion";
import { motion } from "framer-motion";
import { addToCart } from "@/app/redux/features/cart/cartSlice";
import { sliderGoodsSettings } from "@/app/utils/common";
import { useEffect, useState } from "react";
import { MainPageSectionProps } from "@/types/others";


const MainPageSection = ({ products, loading, error, title }: MainPageSectionProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [slidesPerView, setSlidesPerView] = useState(4); // default for desktop

  const handleAddToCart = (id: string) => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  };

  // 🎯 Визначаємо slidesPerView відповідно до поточного розміру вікна
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      let spv = 1.12; // базове значення

      const breakpoints = sliderGoodsSettings.breakpoints;
      if (width >= 992) spv = breakpoints[992].slidesPerView;
      else if (width >= 768) spv = breakpoints[768].slidesPerView;
      else if (width >= 480) spv = breakpoints[480].slidesPerView;
      else spv = breakpoints[360].slidesPerView;

      setSlidesPerView(spv);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  if (error) return <p style={{ textAlign: "center" }}>Помилка: {error}</p>;

  return (
    <section className={styles.main_section}>
      <div className="container">
        <h2 className="secondary-title">{title}</h2>
        <div className={styles.main_section__inner}>
          {loading && (
            <motion.ul
              className={skeletonStyles.skeleton__main__page}
              {...basePropsForMotion}
            >
              {Array.from(
                new Array(Math.floor(slidesPerView))
              ).map((_, i) => (
                <li key={i} className={skeletonStyles.skeleton__item}>
                  <div className={skeletonStyles.skeleton__item__light} />
                </li>
              ))}
            </motion.ul>
          )}

          {!loading && (
            <Swiper {...sliderGoodsSettings} className="swiper-products">
              {products.map((item) => (
                <SwiperSlide
                  key={item._id}
                  className={styles.main_section__slide__wrapper}
                >
                  <div className={styles.main_section__slide}>
                    <div className={styles.main_section__slide__image__wrapper}>
                      <Link
                        href={`/catalog/${item.category}/${item._id}`}
                        className={styles.main_section__link}
                      >
                        <Image
                          src={`https://savonry-server-app-gki2.onrender.com${item.images?.[0] || ""}`}
                          alt={item.name}
                          className={styles.main_section__slide__image}
                          width={200}
                          height={200}
                        />
                      </Link>
                    </div>
                    <Link
                      href={`/catalog/${item.category}/${item._id}`}
                      className={styles.main_section__link}
                    >
                      <h3 className={styles.main_section__slide__name}>
                        {item.name}
                      </h3>
                    </Link>
                    <div className={styles.main_section__slide__bottom}>
                      <div className={styles.main_section__slide__price}>
                        {item.price} грн
                      </div>
                      <button
                        className={styles.main_section__cart__button}
                        onClick={() => handleAddToCart(item._id)}
                      >
                        В кошик
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainPageSection;
