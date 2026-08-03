import Image from "next/image";
import styles from "@/styles/main-page/index.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.about__title__wrapper}>
          <h3 className="secondary-title">Про нас</h3>
        </div>
        <div className={styles.about__inner}>
          <div className={styles.about__left}>
            <Image
              className={styles.about__img}
              src="/img/main-page/about/main-about.png"
              alt="about"
              width={622}
              height={526}
            />
          </div>
          <div className={styles.about__right}>
            <h4 className={styles.about__title}>
              Виробництво косметики «SAVONRY» базується на принципах арома- і
              фітотерапії, при строгому дотриманні рецептур і технологій.
            </h4>
            <p className={styles.about__text}>
              Здоров&apos;я, безпека та благополуччя наших клієнтів — головні
              пріоритети для нас. Ми прагнемо надати продукти високої якості,
              використання яких принесе вам задоволення.
            </p>
            <a className={styles.about__link} href="">
              Докладніше про нас
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
