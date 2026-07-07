"use client";
import styles from "@/styles/for-wholesalers/index.module.scss";
import Breadcrumbs from "@/components/modules/Breadcrumbs/Breadcrumbs";
import { useCatalogBreadcrumbs } from "@/hooks/useCatalogBreadcrumbs";

const WholesalersPage = () => {
  const breadcrumbs = useCatalogBreadcrumbs();

  return (
    <main className="main">
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.wholesalers}>
        <div className="container">
          <h1 className={styles.wholesalers__title}>Оптовикам</h1>
          <p className={styles.wholesalers__text}>
            Ви хочете збільшити продаж вашого магазину косметики або збільшити
            потік клієнтів у спа-салон? Бажаєте, щоб сума за чеком була вищою, а
            задоволених покупців, які б хотіли повернутися більше?
          </p>
          <p className={styles.wholesalers__text}>
            Тоді вам до нас!
          </p>
          <p className={styles.wholesalers__text}>
            Ми пропонуємо ексклюзивну, 100% натуральну та якісну косметику SAVONRY! Ми представлені на ринку з 2005 року, добре зарекомендували себе та маємо в запасі багато позитивних відгуків.
          </p>
          <p className={styles.wholesalers__text}>
            Косметика SAVONRY є люксом не з погляду ціни, але з погляду ексклюзивності. Вона може бути в кожного. Ми працюємо тільки з перевіреними невеликими мережевими магазинами, тому косметика SAVONRY підвищує лояльність до Вашого індивідуального магазину. Вона привертає увагу своїм оформленням, натуральним безпечним складом і головне має попит!
          </p>
          <p className={styles.wholesalers__text}>
            Запрошуємо до співпраці магазини натуральної косметики та салони краси.
          </p>
          <p className={styles.wholesalers__text}>
            Ми працюємо як із юридичними, так і з фізичними особами.
          </p>
          <p className={styles.wholesalers__text}>
            Для отримання більш детальної інформації, умов співпраці та прайс-листа напишіть, будь ласка, нам на ел. пошту: <a href="#" className={styles.wholesalers__link}>mail@savonry.ua</a> або зателефонуйте за номером <a href="#" className={styles.wholesalers__link}>8-800-505-01-03</a> (дзвінок безкоштовний). Ми з радістю відповімо на всі Ваші запитання, запропонуємо вигідні умови, зорієнтуємо за найходовішими товарами.
          </p>
        </div>
      </section>
    </main>
  );
};

export default WholesalersPage;