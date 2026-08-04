"use client";

import styles from "@/styles/catalog/index.module.scss";
import skeletonStyles from "@/styles/skeleton/index.module.scss";
import Link from "next/link";
import Image from 'next/image'
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { addToCart } from "@/app/redux/features/cart/cartSlice";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";
import { basePropsForMotion } from "@/constants/motion";
import { useEffect, useState } from "react";
import WatchedProducts from "@/components/modules/WatchedProducts/WatchedProducts";
import InterestedProducts from "@/components/modules/InterestedProducts/InterestedProducts";
import { useProductsPagination } from "@/hooks/useProductsPagination";
import { ProductsPageProps } from "@/types/others";

const ProductsPage = ({ pageName, fetchAction, extraParams }: ProductsPageProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error, currentPage, paginationProps } =
    useProductsPagination(pageName, fetchAction, extraParams);

  const [showSkeleton, setShowSkeleton] = useState(true);

  // показ скелетону при зміні сторінки
  useEffect(() => {
    setShowSkeleton(true);
  }, [currentPage]);

  // вимикаємо скелетон після фетчу
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowSkeleton(false), 250);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handleAddToCart = (id: string) => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  };

  const title = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  if (error) return <div className="container">Помилка: {error}</div>;

  return (
    <>
      <h1 className={styles.catalog__title}>{title}</h1>

      {showSkeleton && (
        <motion.ul
          {...basePropsForMotion}
          className={skeletonStyles.skeleton}
          style={{ marginBottom: 60 }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <li key={i} className={skeletonStyles.skeleton__item}>
              <div className={skeletonStyles.skeleton__item__light} />
            </li>
          ))}
        </motion.ul>
      )}

      {!showSkeleton && (
        <motion.ul {...basePropsForMotion} className={styles.catalog__list}>
          {products?.length ? (
            products.map((product) => (
              <li key={product._id} className={styles.catalog__item}>
                <div className={styles.catalog__image__wrapper}>
                  <Link
                    href={`/catalog/${product.category}/${product._id}`}
                    className={styles.catalog__link__image}
                  >
                    <Image
                      className={styles.catalog__image}
                      src={`https://savonry-server-app-gki2.onrender.com${
                        product.images?.[0] || "/no-image.png"
                      }`}
                      alt={product.name}
                      width={285}
                      height={286}
                    />
                  </Link>
                </div>
                <Link
                  href={`/catalog/${product.category}/${product._id}`}
                  className={styles.catalog__link}
                >
                  <h3 className={styles.catalog__name}>{product.name}</h3>
                </Link>
                <div className={styles.catalog__bottom}>
                  <div className={styles.catalog__price}>{product.price} грн</div>
                  <button
                    className={styles.catalog__button}
                    onClick={() => handleAddToCart(product._id)}
                  >
                    В кошик
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>Немає товарів у цій категорії.</p>
          )}
        </motion.ul>
      )}

      {<ReactPaginate {...paginationProps} />}
      {!showSkeleton && <WatchedProducts />}
      {!showSkeleton && <InterestedProducts />}
    </>
  );
};

export default ProductsPage;
