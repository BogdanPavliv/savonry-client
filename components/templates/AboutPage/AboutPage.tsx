"use client";
import styles from "@/styles/about/index.module.scss";
import Image from "next/image";
import Breadcrumbs from "@/components/modules/Breadcrumbs/Breadcrumbs";
import { useCatalogBreadcrumbs } from "@/hooks/useCatalogBreadcrumbs";
import Banner from "@/components/modules/Banner/Banner";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import VideoSection from "@/components/modules/AboutPage/VideoSection";
import InstagramSlider from "@/components/modules/AboutPage/InstagramSlider";

const AboutPage = () => {
  const breadcrumbs = useCatalogBreadcrumbs();
  const isMedia1000 = useMediaQuery(1000);
  const isMedia768 = useMediaQuery(768);
  const isMedia680 = useMediaQuery(680);

  return (
    <main className="main">
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.about}>
        <div className="container">
          <Image
            src="/img/about/about-banner.jpg"
            className={styles.about__banner}
            alt="Про нас"
            width={1200}
            height={442}
          />
          <div className={styles.about__top}>
            <h2 className={styles.about__title}>Про SAVONRY</h2>
            <div className={styles.about__top__top}>
              <div className={styles.about__top__top__left}>
                <p className={styles.about__text}>
                  Виробництво косметики «SAVONRY» базується на принципах арома-
                  і фітотерапії, при строгому дотриманні рецептур і технологій.
                </p>
                <p className={styles.about__text}>
                  Здоров&apos;я, безпека та благополуччя наших клієнтів — головні
                  пріоритети для нас. Ми прагнемо надати продукти високої
                  якості, використання яких принесе вам задоволення.
                </p>
                <p className={styles.about__text}>
                  Тому ми приділяємо особливу увагу оцінці інгредієнтів,
                  ретельно обираючи ті, які ми включаємо в наші продукти, і ті,
                  які ми виключаємо.
                </p>
                <p className={styles.about__text}>
                  Ми не випробуваємо продукцію на тварин, а пробуємо її самі.
                </p>
              </div>
              <div className={styles.about__top__top__right}>
                <Image
                  src="/img/about/about-img-1.jpg"
                  className={styles.about__image_1}
                  alt="Про нас"
                  width={384}
                  height={365}
                />
              </div>
            </div>
            <div className={styles.about__top__bottom}>
              <div className={styles.about__top__bottom__left}>
                {!isMedia1000 ? (
                  <Image
                    src="/img/about/about-img-2.jpg"
                    className={styles.about__image}
                    alt="Про нас"
                    width={692}
                    height={214}
                  />
                ) : !isMedia768 ? (
                  <Image
                    src="/img/about/about-img-2-md.jpg"
                    className={styles.about__image}
                    alt="Про нас"
                    width={692}
                    height={214}
                  />
                ) : (
                  <Image
                    src="/img/about/about-img-2-sm.jpg"
                    className={styles.about__image}
                    alt="Про нас"
                    width={692}
                    height={214}
                  />
                )}
              </div>
              <div className={styles.about__top__bottom__right}>
                <div className={styles.about__quote}>
                  «Наша косметика завжди свіжа, тому що ми виробляємо її тільки
                  під замовлення»
                </div>
                <div className={styles.about__company_name}>SAVONRY</div>
              </div>
            </div>
          </div>
          <div className={styles.about__bottom}>
            <h2 className={styles.about__title}>Наші принципи</h2>
            <div className={styles.about__bottom__bottom}>
              <div className={styles.about__bottom__bottom__row}>
                <div className={styles.about__bottom__bottom__img}>
                  {!isMedia680 && (
                    <Image
                      src="/img/about/about-img-3.jpg"
                      className={styles.about__bottom__image}
                      alt="Про нас"
                      width={386}
                      height={386}
                    />
                  )}
                  {isMedia680 && (
                    <Image
                      src="/img/about/about-img-3-lg.jpg"
                      className={styles.about__bottom__image}
                      alt="Про нас"
                      width={440}
                      height={240}
                    />
                  )}
                </div>
                <div className={styles.about__bottom__bottom__text}>
                  <p className={styles.about__subhead}>
                    Ми робимо все можливе, щоб гарантувати, що кожен продукт,
                    який ми розробляємо, відповідає суворим стандартам безпеки,
                    ефективності та стабільності.
                  </p>
                  <p className={styles.about__subhead}>
                    Ми використовуємо сучасні активні інгредієнти, такі як
                    емоленти, комплекси із кислотами, вітамінні активи та інші.
                  </p>
                </div>
              </div>
              <div
                className={`${styles.about__bottom__bottom__row} ${styles.about__bottom__bottom__row_reverse}`}
              >
                <div className={styles.about__bottom__bottom__text}>
                  <p className={styles.about__subhead}>
                    Ми тестуємо кожен продукт на всіх етапах виробництва, щоб
                    переконатися, що він відповідає стандартам якості.
                  </p>
                  <p className={styles.about__subhead}>
                    Перевіряємо рівень pH, термо- та колоїдну стабільність,
                    використовуємо метод прискореного старіння, тестуємо
                    взаємодію тари та продукту.
                  </p>
                  <p className={styles.about__subhead}>
                    Готові продукти тестуємо на добровільній фокус-групі.
                  </p>
                </div>
                <div className={styles.about__bottom__bottom__img}>
                  {!isMedia680 && (
                    <Image
                      src="/img/about/about-img-4.jpg"
                      className={styles.about__bottom__image}
                      alt="Про нас"
                      width={386}
                      height={386}
                    />
                  )}
                  {isMedia680 && (
                    <Image
                      src="/img/about/about-img-4-lg.jpg"
                      className={styles.about__bottom__image}
                      alt="Про нас"
                      width={440}
                      height={240}
                    />
                  )}
                </div>
              </div>
              <div className={styles.about__bottom__bottom__row}>
                <div className={styles.about__bottom__bottom__img}>
                  {!isMedia680 && (
                    <Image
                      src="/img/about/about-img-5.jpg"
                      className={styles.about__bottom__image}
                      alt="Про нас"
                      width={386}
                      height={386}
                    />
                  )}
                  {isMedia680 && (
                    <Image
                      src="/img/about/about-img-5-lg.jpg"
                      className={styles.about__bottom__image}
                      alt="Про нас"
                      width={440}
                      height={240}
                    />
                  )}
                </div>
                <div className={styles.about__bottom__bottom__text}>
                  <p className={styles.about__subhead}>
                    Ми уважно ставимося до складу упаковки: використовуємо лише
                    екологічні матеріали та упаковку, яку можна здати на
                    вторинну переробку.
                  </p>
                  <p className={styles.about__subhead}>
                    При тестуванні взаємодії продукції та тари один з одним ми
                    враховуємо безліч факторів впливу: починаючи від безпеки,
                    закінчуючи можливістю вторинної переробки.
                  </p>
                </div>
              </div>
              <div
                className={`${styles.about__bottom__bottom__row} ${styles.about__bottom__bottom__row_reverse}`}
              >
                <div className={styles.about__bottom__bottom__text}>
                  <p className={styles.about__subhead}>
                    Так само, як ми приділяємо велику увагу процесу оцінки
                    інгредієнтів, рецептури, ми ретельно відбираємо
                    постачальників сировини та упаковки, стежимо щоб їхня
                    продукція відповідала нашим стандартам якості.
                  </p>
                  <p className={styles.about__subhead}>
                    Вся сировина проходить жорсткий вхідний контроль на
                    відповідність паспортним даним та стандартам.
                  </p>
                </div>
                <div className={styles.about__bottom__bottom__img}>
                  {!isMedia680 && (
                    <Image
                      src="/img/about/about-img-6.jpg"
                      className={styles.about__bottom__image}
                      alt="Про нас"
                      width={386}
                      height={386}
                    />
                  )}
                  {isMedia680 && (
                    <Image
                      src="/img/about/about-img-6-lg.jpg"
                      className={styles.about__bottom__image}
                      alt="Про нас"
                      width={386}
                      height={386}
                    />
                  )}
                </div>
              </div>
              <div className={styles.about__bottom__bottom__row}>
                <div className={styles.about__bottom__bottom__img}>
                  {!isMedia680 && (
                    <Image
                      src="/img/about/about-img-7.jpg"
                      className={styles.about__bottom__image}
                      alt="Про нас"
                      width={386}
                      height={386}
                    />
                  )}
                  {isMedia680 && (
                    <Image
                      src="/img/about/about-img-7-lg.jpg"
                      className={styles.about__bottom__image}
                      alt="Про нас"
                      width={440}
                      height={240}
                    />
                  )}
                </div>
                <div className={styles.about__bottom__bottom__text}>
                  <p className={styles.about__subhead}>
                    Ми хочемо, щоб наші клієнти достеменно знали, що входить до
                    складу наших продуктів.
                  </p>
                  <p className={styles.about__subhead}>
                    Для цього ми послідовно перераховуємо інгредієнти відповідно
                    до встановлених стандартів і не використовуємо загальних
                    фраз.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.advantages}>
        <div className="container">
          <h2 className={styles.advantages__title}>
            Ми дбаємо про ваше майбутнє
          </h2>
          <ul className={styles.advantages__list}>
            <li className={styles.advantages__item}>
              <Image
                src="/img/about/about-img-8.jpg"
                className={styles.advantages__image}
                alt="Advantages image"
                width={386}
                height={484}
              />
            </li>
            <li className={styles.advantages__item}>
              <Image
                src="/img/about/about-img-9.jpg"
                className={styles.advantages__image}
                alt="Advantages image"
                width={386}
                height={484}
              />
            </li>
            <li className={styles.advantages__item}>
              <Image
                src="/img/about/about-img-10.jpg"
                className={styles.advantages__image}
                alt="Advantages image"
                width={386}
                height={484}
              />
            </li>
          </ul>
        </div>
      </section>
      <VideoSection />
      <InstagramSlider />
      <Banner />
    </main>
  );
};

export default AboutPage;
