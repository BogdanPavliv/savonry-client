"use client";
import { EmptyPageContentProps } from "@/types/product";
import Image from "next/image";
import styles from "@/styles/empty-content/index.module.scss";


const EmptyPageContent = ({
  title = "Ваш кошик порожній",
  subtitle = "Додайте товари, щоб продовжити оформлення замовлення",
  buttonText = "На головну",
  onButtonClick,
}: EmptyPageContentProps) => {
  return (
    <div className={styles.empty}>
      <Image
        src="/img/cart-page/empty-cart-page.png"
        alt="empty"
        width={180}
        height={180}
        className={styles.empty__image}
      />

      <h2 className={styles.empty__title}>{title}</h2>

      <p className={styles.empty__subtitle}>{subtitle}</p>

      {buttonText && (
        <button className={styles.empty__btn} onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default EmptyPageContent;
