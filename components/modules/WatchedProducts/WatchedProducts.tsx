"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { fetchWatchedProducts } from "@/app/redux/features/products/productsSlice";
import skeletonStyles from "@/styles/skeleton/index.module.scss";
import styles from "@/styles/watched-products/index.module.scss";
import Link from "next/link";
import { basePropsForMotion } from "@/constants/motion";
import { motion } from "framer-motion";
import { addToCart } from "@/app/redux/features/cart/cartSlice";
import { sliderWatchedProductsSettings } from "@/app/utils/common";

const WatchedProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { watchedProducts, watchedLoading } = useSelector((state: RootState) => ({
    watchedProducts: state.products.watchedProducts,
    watchedLoading: state.products.watchedLoading,
  }));
  
  useEffect(() => {
    const saved: string[] = JSON.parse(localStorage.getItem("watchedProducts") || "[]");
    if (saved.length > 0) {
      dispatch(fetchWatchedProducts(saved));
    }
  }, [dispatch]);

  const handleAddToCart = (id: string) => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  };

  if (!watchedProducts || watchedProducts.length === 0) return null;

  return (
    <div className={styles.watched}>
      <div className="container">
        <h2 className="secondary-title">Ви дивилися</h2>
        <div className={styles.watched__inner}>
          {watchedLoading ? (
            <motion.ul className={skeletonStyles.skeleton} {...basePropsForMotion}>
              {Array.from(new Array(4)).map((_, i) => (
                <li key={i} className={skeletonStyles.skeleton__item}>
                  <div className={skeletonStyles.skeleton__item__light} />
                </li>
              ))}
            </motion.ul>
          ) : (
            <Swiper {...sliderWatchedProductsSettings} className="swiper-watched-products">
              {watchedProducts.map((item) => (
                <SwiperSlide key={item._id} className={styles.watched__slide__wrapper}>
                  <div className={styles.watched__slide}>
                    <div className={styles.watched__slide__image__wrapper}>
                      <Link href={`/catalog/${item.category}/${item._id}`} className={styles.watched__link}>
                        <Image
                          src={`https://savonry-server-app-gki2.onrender.com${item.images?.[0] || "/no-image.png"}`}
                          alt={item.name}
                          className={styles.watched__slide__image}
                        />
                      </Link>
                    </div>
                    <Link href={`/catalog/${item.category}/${item._id}`} className={styles.watched__link}>
                      <h3 className={styles.watched__slide__name}>{item.name}</h3>
                    </Link>
                    <div className={styles.watched__slide__bottom}>
                      <div className={styles.watched__slide__price}>{item.price} грн</div>
                      <button
                        className={styles.watched__cart__button}
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

export default WatchedProducts;
