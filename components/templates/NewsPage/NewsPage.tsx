"use client";
import styles from "@/styles/our-news/index.module.scss";
import Image from "next/image";
import Breadcrumbs from "@/components/modules/Breadcrumbs/Breadcrumbs";
import { useCatalogBreadcrumbs } from "@/hooks/useCatalogBreadcrumbs";

const NewsPage = () => {
  const breadcrumbs = useCatalogBreadcrumbs();

  return (
    <main className="main">
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.our_news}>
        <div className="container">
          <h1 className={styles.our_news__title}>Наші новини</h1>
          <Image
            src="/img/our-news/our-news.jpg"
            className={styles.our_news__image}
            alt="Новини"
            width={1200}
            height={285}
          />
          <h3 className={styles.our_news__subtitle}>Знижки</h3>
          <div className={styles.our_news__list_wrapper}>
            <ul className={`${styles.our_news__list} margin-none`}>
              <li className={styles.our_news__item}>
                знижка 30% на: кулька для ванни Журавлина, кулька для ванни
                Липа, все косметичне молочко
              </li>
              <li className={styles.our_news__item}>
                знижка 500 гривень на першу покупку! Просто підпишіться на наші
                новини та отримайте промо-код на електронну пошту. Підписка дає
                переваги: ви першими дізнаєтеся про наші новинки, розпродажі,
                отримуєте секретні промо-коди.
              </li>
            </ul>
            <a href="" className={styles.our_news__link}>
              Перейти до розділу акції
            </a>
          </div>

          <h3 className={styles.our_news__subtitle}>Конкурс</h3>
          <ul className={styles.our_news__list}>
            <li className={styles.our_news__item}>
              Щотижня в нашому Instagram @ savonry.beauty ми розігруємо набори
              засобів! Даруємо Вам за активність!
            </li>
          </ul>
          <h3 className={styles.our_news__subtitle}>Доставка</h3>
          <ul className={styles.our_news__list}>
            <li className={styles.our_news__item}>
              Безкоштовна доставка від 1500 гривень по Києву та від 2500 гривень
              по Україні.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;