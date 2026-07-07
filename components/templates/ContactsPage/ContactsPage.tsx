"use client";
import styles from "@/styles/contacts/index.module.scss";
import Banner from "@/components/modules/Banner/Banner";
import Breadcrumbs from "@/components/modules/Breadcrumbs/Breadcrumbs";
import { useCatalogBreadcrumbs } from "@/hooks/useCatalogBreadcrumbs";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ContactsForm from "@/components/modules/ContactsPage/ContactsForm";

const ContactsPage = () => {
  const breadcrumbs = useCatalogBreadcrumbs();
  const isMedia768 = useMediaQuery(768);

  return (
    <main className="main">
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.contacts}>
        <div className="container">
          <h2 className={styles.contacts__title}>Контакти</h2>
          <div className={styles.contacts__map}>
            <div className={styles.contacts__map__top}>
              <iframe
                width="100%"
                height="442"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=100%25&amp;height=280&amp;hl=en&amp;q=%D0%9A%D0%B8%D1%97%D0%B2,%20%D0%B2%D1%83%D0%BB.%20%D0%A5%D1%80%D0%B5%D1%89%D0%B0%D1%82%D0%B8%D0%BA%201+(My%20Business%20Name)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            <div className={styles.contacts__map__bottom}>
              <div className={styles.contacts__map__bottom__left}>
                <h3 className={styles.contacts__map__title}>Контактні дані</h3>
                <ul className={styles.contacts__map__bottom__left__list}>
                  <li
                    className={styles.contacts__map__bottom__left__list__item}
                  >
                    <div
                      className={
                        styles.contacts__map__bottom__list__item__title
                      }
                    >
                      Адрес:
                    </div>
                    <div
                      className={
                        styles.contacts__map__bottom__left__list__item__text
                      }
                    >
                      м. Київ, вул. Хрещатик 1
                    </div>
                  </li>
                  <li
                    className={styles.contacts__map__bottom__left__list__item}
                  >
                    <div
                      className={
                        styles.contacts__map__bottom__list__item__title
                      }
                    >
                      Телефон:
                    </div>
                    <div
                      className={
                        styles.contacts__map__bottom__left__list__item__text
                      }
                    >
                      +380 44 123 45 67
                    </div>
                    <div
                      className={
                        styles.contacts__map__bottom__left__list__item__text
                      }
                    >
                      +380 44 123 45 68
                    </div>
                  </li>
                  <li
                    className={styles.contacts__map__bottom__left__list__item}
                  >
                    <div
                      className={
                        styles.contacts__map__bottom__list__item__title
                      }
                    >
                      Email:
                    </div>
                    <div
                      className={
                        styles.contacts__map__bottom__left__list__item__text
                      }
                    >
                      info@savonryshop.com
                    </div>
                  </li>
                  <li
                    className={styles.contacts__map__bottom__left__list__item}
                  >
                    <div
                      className={
                        styles.contacts__map__bottom__list__item__title
                      }
                    >
                      Робочі дні з 9:30 до 17:30, прийом замовлень online 24/7
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.contacts__map__bottom__right}>
                <h3 className={styles.contacts__map__title}>
                  Реквізити організації
                </h3>
                <div className={styles.contacts__map__bottom__right__bottom}>
                  <div
                    className={`${styles.contacts__map__bottom__right__bottom__row} ${styles.contacts__map__bottom__right__bottom__row__left}`}
                  >
                    <ul className={styles.contacts__map__bottom__right__list}>
                      <li
                        className={
                          styles.contacts__map__bottom__right__list__item
                        }
                      >
                        <div
                          className={`${styles.contacts__map__bottom__list__item__title} ${styles.contacts__map__bottom__list__item__title__left}`}
                        >
                          Назва:
                        </div>
                        <div
                          className={
                            styles.contacts__map__bottom__right__list__item__text
                          }
                        >
                          ПП БУДИНКУ ІННА ВАСИЛЬІВНА
                        </div>
                      </li>
                      <li
                        className={
                          styles.contacts__map__bottom__right__list__item
                        }
                      >
                        <div
                          className={`${styles.contacts__map__bottom__list__item__title} ${styles.contacts__map__bottom__list__item__title__left}`}
                        >
                          ІПН:
                        </div>
                        <div
                          className={
                            styles.contacts__map__bottom__right__list__item__text
                          }
                        >
                          780101602509
                        </div>
                      </li>
                      <li
                        className={
                          styles.contacts__map__bottom__right__list__item
                        }
                      >
                        <div
                          className={`${styles.contacts__map__bottom__list__item__title} ${styles.contacts__map__bottom__list__item__title__left}`}
                        >
                          ОГРН:
                        </div>
                        <div
                          className={
                            styles.contacts__map__bottom__right__list__item__text
                          }
                        >
                          322784700034519
                        </div>
                      </li>
                      <li
                        className={
                          styles.contacts__map__bottom__right__list__item
                        }
                      >
                        <div
                          className={`${styles.contacts__map__bottom__list__item__title} ${styles.contacts__map__bottom__list__item__title__left}`}
                        >
                          Р/с:
                        </div>
                        <div
                          className={
                            styles.contacts__map__bottom__right__list__item__text
                          }
                        >
                          40802810955000083317
                        </div>
                      </li>
                      <li
                        className={
                          styles.contacts__map__bottom__right__list__item
                        }
                      >
                        <div
                          className={`${styles.contacts__map__bottom__list__item__title} ${styles.contacts__map__bottom__list__item__title__left}`}
                        >
                          К/с:
                        </div>
                        <div
                          className={
                            styles.contacts__map__bottom__right__list__item__text
                          }
                        >
                          30101810500000000653
                        </div>
                      </li>
                      <li
                        className={
                          styles.contacts__map__bottom__right__list__item
                        }
                      >
                        <div
                          className={`${styles.contacts__map__bottom__list__item__title} ${styles.contacts__map__bottom__list__item__title__left}`}
                        >
                          Ф/с:
                        </div>
                        <div
                          className={
                            styles.contacts__map__bottom__right__list__item__text
                          }
                        >
                          044030653
                        </div>
                      </li>
                    </ul>
                    {!isMedia768 && (
                      <a className={styles.contacts__map__link} href="#">
                        Завантажити реквізити
                      </a>
                    )}
                  </div>
                  <div
                    className={`${styles.contacts__map__bottom__right__bottom__row} ${styles.contacts__map__bottom__right__bottom__row__right}`}
                  >
                    <ul className={styles.contacts__map__bottom__right__list}>
                      <li
                        className={
                          styles.contacts__map__bottom__right__list__item
                        }
                      >
                        <div
                          className={`${styles.contacts__map__bottom__list__item__title} ${styles.contacts__map__bottom__list__item__title__right}`}
                        >
                          Юридична адреса:
                        </div>
                        <div
                          className={
                            styles.contacts__map__bottom__right__list__item__text
                          }
                        >
                          м. Київ, вул. Хрещатик 1
                        </div>
                      </li>
                      <li
                        className={
                          styles.contacts__map__bottom__right__list__item
                        }
                      >
                        <div
                          className={`${styles.contacts__map__bottom__list__item__title} ${styles.contacts__map__bottom__list__item__title__right}`}
                        >
                          Фактична адреса:
                        </div>
                        <div
                          className={
                            styles.contacts__map__bottom__right__list__item__text
                          }
                        >
                          м. Київ, вул. Хрещатик 1
                        </div>
                      </li>
                      <li
                        className={
                          styles.contacts__map__bottom__right__list__item
                        }
                      >
                        <div
                          className={`${styles.contacts__map__bottom__list__item__title} ${styles.contacts__map__bottom__list__item__title__right}`}
                        >
                          Поштова адреса:
                        </div>
                        <div
                          className={
                            styles.contacts__map__bottom__right__list__item__text
                          }
                        >
                          м. Київ, вул. Хрещатик 1
                        </div>
                      </li>
                    </ul>
                    {isMedia768 && (
                      <a className={styles.contacts__map__link} href="#">
                        Завантажити реквізити
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactsForm />
        </div>
      </section>
      <Banner />
    </main>
  );
};

export default ContactsPage;
