import Image from "next/image";
import styles from "@/styles/main-page/index.module.scss";

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <div className={styles.advantages__inner}>
          <div className={styles.advantages__top}>
            <div className={styles.advantages__top__left}></div>
            <div className={styles.advantages__top__right}>
              <h3
                className={`secondary-title text-left ${styles.advantages__title}`}
              >
                SAVONRY – це ефективна косметика з чистим рослинним складом!
              </h3>
            </div>
          </div>
          <div className={styles.advantages__bottom}>
            <div className={styles.advantages__bottom__left}>
              <div className={styles.advantages__item}>
                <img
                  className={styles.advantages__icon}
                  src="/img/main-page/advantages/card.svg"
                  alt="card"
                />
                <p className={styles.advantages__text}>Зручна оплата онлайн</p>
              </div>
              <div className={styles.advantages__item}>
                <img
                  className={styles.advantages__icon}
                  src="/img/main-page/advantages/delivery.svg"
                  alt="delivery"
                />
                <p className={styles.advantages__text}>Безкоштовна доставка</p>
              </div>
            </div>
            <div className={styles.advantages__bottom__right}>
          
                <Image
                  className={styles.advantages__img}
                  src="/img/main-page/advantages/girls.png"
                  alt="girls"
                  width={408}
                  height={406}
                />
            
              <div
                className={`${styles.advantages__item} ${styles.advantages__item__end}`}
              >
                <img
                  className={styles.advantages__icon}
                  src="/img/main-page/advantages/nature.svg"
                  alt="nature"
                />
                <p className={styles.advantages__text}>
                  Натуральні інгредієнти
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
