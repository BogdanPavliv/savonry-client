import Link from "next/link";
import Image from "next/image";
import { IHeroSlide } from "@/types/main-page";
import styles from "@/styles/main-page/index.module.scss";

const HeroSlide = ({ slide }: { slide: IHeroSlide }) => {
  return (
    <div className={styles.hero__slider__slide__wrapper}>
      <Image
        src={slide.image}
        alt={slide.title}
        className={styles.hero__slider__slide__img}
        width={1920}
        height={529}
        loading="eager"
      />
      <div className={styles.hero__slider__slide__info}>
        <div className={styles.hero__slider__slide__title}>{slide.title}</div>
        <div className={styles.hero__slider__slide__text}>{slide.text}</div>
        <Link href={slide.href} className={styles.hero__slider__slide__link}>
          Докладніше
        </Link>
      </div>
    </div>
  );
};

export default HeroSlide;
