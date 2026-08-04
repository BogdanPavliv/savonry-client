"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { fetchInterestedProducts } from "@/app/redux/features/products/productsSlice";
import skeletonStyles from "@/styles/skeleton/index.module.scss";
import styles from "@/styles/interested-products/index.module.scss";
import Link from "next/link";
import { basePropsForMotion } from "@/constants/motion";
import { motion } from "framer-motion";
import { addToCart } from "@/app/redux/features/cart/cartSlice";
import { sliderWatchedProductsSettings } from "@/app/utils/common";

const InterestedProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { interestedProducts, interestedLoading } = useSelector(
    (state: RootState) => ({
      interestedProducts: state.products.interestedProducts,
      interestedLoading: state.products.interestedLoading,
    })
  );

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem("watchedProducts") || "[]");
    const lastWatchedId = watched.length > 0 ? watched[0] : null;
    dispatch(fetchInterestedProducts(lastWatchedId));
  }, [dispatch]);

  const handleAddToCart = (id: string) => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  };

  if (!interestedProducts || interestedProducts.length === 0) return null;

  return (
    <div className={styles.interested}>
      <div className="container">
        <h2 className="secondary-title">Вам буде цікаво</h2>
        <div className={styles.interested__inner}>
          {interestedLoading ? (
            <motion.ul
              className={skeletonStyles.skeleton}
              {...basePropsForMotion}
            >
              {Array.from(new Array(4)).map((_, i) => (
                <li key={i} className={skeletonStyles.skeleton__item}>
                  <div className={skeletonStyles.skeleton__item__light} />
                </li>
              ))}
            </motion.ul>
          ) : (
            <Swiper
              {...sliderWatchedProductsSettings}
              className="swiper-interested-products"
            >
              {interestedProducts.map((item) => (
                <SwiperSlide
                  key={item._id}
                  className={styles.interested__slide__wrapper}
                >
                  <div className={styles.interested__slide}>
                    <div className={styles.interested__slide__image__wrapper}>
                      <Link
                        href={`/catalog/${item.category}/${item._id}`}
                        className={styles.interested__link}
                      >
                        <img
                          src={`https://savonry-server-app-gki2.onrender.com${
                            item.images?.[0] || "/no-image.png"
                          }`}
                          alt={item.name}
                          className={styles.interested__slide__image}
                        />
                      </Link>
                    </div>
                    <Link
                      href={`/catalog/${item.category}/${item._id}`}
                      className={styles.interested__link}
                    >
                      <h3 className={styles.interested__slide__name}>
                        {item.name}
                      </h3>
                    </Link>
                    <div className={styles.interested__slide__bottom}>
                      <div className={styles.interested__slide__price}>
                        {item.price} грн
                      </div>
                      <button
                        className={styles.interested__cart__button}
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
    </div>
  );
};

export default InterestedProducts;
