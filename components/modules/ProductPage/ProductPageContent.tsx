"use client";
import dynamic from "next/dynamic";
import { ProductPageContentProps } from "@/types/product";
import ProductInfoAccordion from "@/components/modules/ProductPage/ProductInfoAccordion";
import { SliderSettings } from "@/types/others";
import WatchedProducts from '@/components/modules/WatchedProducts/WatchedProducts'
import InterestedProducts from '@/components/modules/InterestedProducts/InterestedProducts'
import styles from "@/styles/product/index.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ProductPageContent = ({
  product,
  quantity,
  setQuantity,
  handleAddToCart,
}: ProductPageContentProps) => {
  const imageArray = product?.images || [];

  const settings: SliderSettings = {
    customPaging: (id: number) => (
      <a href="#!" className={styles.thumbnail_link}>
        <img
          className={styles.thumbnail_img}
          src={`https://savonry-server-app-gki2.onrender.com${imageArray[id]?.original}`}
          alt={`Thumbnail ${id}`}
        />
      </a>
    ),
    dots: true,
    arrows: true,
    dotsClass: `${styles.product__dots} ${styles.product__thumbs}`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantity(value > 0 ? value : 1);
  };

  return (
    <>
      <div className={styles.product__inner}>
        {/* LEFT SIDE (Images) */}
        <div className={styles.product__left}>
          <div className="product__slider__wrapper">
            <Slider {...settings} className={styles.slick_product}>
              {product.images?.map((item, index) => (
                <div className={styles.product__card} key={index}>
                  <img
                    className={styles.product__card__img}
                    src={`https://savonry-server-app-gki2.onrender.com${item.original}`}
                    alt={`Slide ${index}`}
                    width={285}
                    height={286}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* RIGHT SIDE (Info) */}
        <div className={styles.product__right}>
          <div className={styles.product__vendorCode}>
            Артикул: {product.vendorCode}
          </div>
          <h1 className={styles.product__name}>{product.name}</h1>
          <div className={styles.product__volume}>
            Об&apos;єм: {product.volume} г
          </div>
          <div className={styles.product__description_sm}>
            {product.description}
          </div>

          <div className={styles.product__description}>
            <ProductInfoAccordion title="Докладніше">
              <p className={styles.product__readMore}>{product.readMore}</p>
            </ProductInfoAccordion>
          </div>

          <div className={styles.product__description}>
            <ProductInfoAccordion title="Склад">
              <p className={styles.product__composition}>
                {product.composition}
              </p>
            </ProductInfoAccordion>
          </div>

          {/* PRICE */}
          <div className={styles.product__price}>
            {(product.price ?? 0) * quantity} ₴
          </div>

          {/* ACTIONS */}
          <div className={styles.product__bottom}>
            <div className={styles.product__quantity}>
              <button
                onClick={handleDecrease}
                className={`${styles.product__quantity__button} ${styles.product__quantity__minus}`}
              ></button>
              <input
                className={styles.product__quantity__input}
                type="text"
                value={quantity}
                onChange={handleInputChange}
                min={1}
              />
              <button
                onClick={handleIncrease}
                className={`${styles.product__quantity__button} ${styles.product__quantity__plus}`}
              ></button>
            </div>
            <button
              className={styles.product__addToCartBtn}
              onClick={handleAddToCart}
            >
              В кошик
            </button>
          </div>
        </div>
      </div>
      <WatchedProducts />
      <InterestedProducts />
    </>
  );
};

export default ProductPageContent;
