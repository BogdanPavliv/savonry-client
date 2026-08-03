"use client";
import styles from "@/styles/delivery/index.module.scss";
import Breadcrumbs from "@/components/modules/Breadcrumbs/Breadcrumbs";
import { useCatalogBreadcrumbs } from "@/hooks/useCatalogBreadcrumbs";
import FaqContent from "@/components/modules/DeliveryPage/FaqContent";

const DeliveryPage = () => {
  const breadcrumbs = useCatalogBreadcrumbs();
  return (
    <main className="main">
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.delivery}>
        <div className="container">
          <h2 className={styles.delivery__title}>Доставка та оплата</h2>
          <div className={styles.delivery__payment}>
            <h3 className={styles.delivery__subtitle}>Оплата замовлення</h3>
            <p className={styles.delivery__text}>
              На даний момент в нашому інтернет-магазині можливі чотири варіанти
              оплати:
            </p>
            <ul className={styles.delivery__payment_list}>
              <li className={styles.delivery__payment_item}>
                Оплата при отриманні (готівкою або карткою)
              </li>
              <li className={styles.delivery__payment_item}>
                Оплата онлайн (банківською картою через платіжну систему)
              </li>
              <li className={styles.delivery__payment_item}>
                Оплата через мобільний додаток (Apple Pay, Google Pay)
              </li>
              <li className={styles.delivery__payment_item}>
                Безготівковий розрахунок для юридичних осіб
              </li>
            </ul>
            <p className={styles.delivery__text}>
              Щоб оплатити замовлення банківською картою, через мобільний
              додаток, безготівковим розрахунком або готівкою Вам необхідно
              вибрати відповідний спосіб оплати в графі «Способ оплати» при
              оформленні замовлення на сайті.
            </p>
            <p className={styles.delivery__text}>
              Готівкою кур&apos;єром: Оплата замовлення проводиться готівкою гривнями
              кур&apos;єру при отриманні товару.
            </p>
            <p className={styles.delivery__text}>
              При оплаті замовлення банківською карткою (100 % передоплата)
              обробка платежу відбувається на сайті системи електронних платежів
              Приватбанку , яка пройшла міжнародну сертифікацію. Це означає, що
              ваші конфіденційні дані (реквізитні карти, реєстраційні дані та
              ін.) не обробляються в інтернет-магазині, їх обробка повністю
              захищена і ні, у тому числі наш інтернет-магазин натуральної
              косметики SavonryShop.ua не може отримати персональні та
              банківські дані клієнта.
            </p>
            <p className={styles.delivery__text}>
              При виборі способу оплати квитанцією через банк роздрукуйте
              квитанцію. Оплатіть її у будь-якому відділенні будь-якого банку.
              УВАГА при цьому способі оплати банк отримає комісію, розмір якої
              визначається банком. Також ви можете оплатити квитанцію через
              інтернет банк, якщо у вас є.
            </p>
            <p className={styles.delivery__text}>
              В даний час замовлення приймаються через сайт лише від фізичних
              осіб. Для того, щоб купити натуральну косметику Savonry юридичній
              особі, Вам необхідно зв&apos;язатися з нашим офісом за контактними
              даними – у розділі контакти
            </p>
          </div>
          <div className={styles.delivery__payment_and_delivery}>
            <h3 className={styles.delivery__subtitle}>
              Доставка і оплата замовлення в інтернет магазині
            </h3>
            <div className={styles.delivery__subhead}>Доставка по Україні</div>
            <p className={styles.delivery__text}>
              Доставка замовлень по Україні здійснюється такими способами:
            </p>
            <ul className={styles.delivery__payment_and_delivery_list}>
              <li className={styles.delivery__payment_and_delivery_item}>
                <div
                  className={styles.delivery__payment_and_delivery_item__title}
                >
                  1. Кур&apos;єрськими службами Новою поштою
                </div>
                <p className={styles.delivery__text}>
                  При замовленні від 2500 гривень кур&apos;єрська доставка
                  здійснюється безкоштовно, при замовленні на меншу суму
                  вартість доставки становитиме 350 гривень. Передача замовлень
                  службі доставки здійснюється протягом 1-3 робочих днів після
                  надходження оплати на наш розрахунковий рахунок лише за
                  робочими днями. Кур&apos;єрські служби доставляють замовлення до
                  дверей у максимально короткі терміни.
                </p>
              </li>
              <li className={styles.delivery__payment_and_delivery_item}>
                <div
                  className={styles.delivery__payment_and_delivery_item__title}
                >
                  2. Доставка Укрпоштою
                </div>
                <p className={styles.delivery__text}>
                  При замовленні від 2500 гривень доставка Укрпоштою
                  здійснюється безкоштовно, при замовленні на меншу суму
                  вартість доставки складе 250 гривень. Відправка замовлень
                  здійснюється протягом 1-3 робочих днів після надходження
                  оплати на наш розрахунковий рахунок, лише у робочі дні.
                </p>
              </li>
              <li className={styles.delivery__payment_and_delivery_item}>
                <div
                  className={styles.delivery__payment_and_delivery_item__title}
                >
                  3. До пунктів видачі замовлень (ПВЗ)
                </div>
                <p className={styles.delivery__text}>
                  Наша кур&apos;єрська служба має більше ніж 1000 пунктів видачі
                  замовлень по всій Україні. Пункти видачі зручно розташовані та
                  їх легко знайти. При замовленні від 2500 гривень доставка до
                  ПВЗ здійснюється безкоштовно. За меншої суми замовлення
                  вартість доставки до ПВЗ становитиме 300 гривень. Передача
                  замовлень кур&apos;єрській службі здійснюється протягом 1-3 робочих
                  днів після надходження оплати на наш розрахунковий рахунок
                  лише за робочими днями. Після того, як Ваше замовлення надійде
                  до пункту видачі, на телефон прийде SMS-повідомлення,
                  замовлення зберігається у пункті видачі 14 календарних днів,
                  можливе платне продовження зберігання..
                </p>
              </li>
            </ul>
            <div className={styles.delivery__subhead}>Доставка по Києву</div>

            <p className={styles.delivery__text}>
              Оплата замовлень провадиться кур&apos;єру при отриманні товару, можлива
              оплата банківською карткою, через мобільний додаток або
              безготівковим розрахунком для юридичних осіб.
            </p>
            <p className={styles.delivery__text}>
              При оформленні замовлення в Києві можна отримати такими способами:
            </p>
            <ul className={styles.delivery__payment_and_delivery_list}>
              <li className={styles.delivery__payment_and_delivery_item}>
                <div
                  className={styles.delivery__payment_and_delivery_item__title}
                >
                  1. Кур&apos;єрська доставка
                </div>
                <p className={styles.delivery__text}>
                  При замовленні від 2500 гривень доставка замовлень по Києву
                  здійснюється безкоштовно, за меншої суми замовлення вартість
                  доставки складе 300 гривень. Доставка замовлень здійснюється
                  протягом 1-2 робочих днів після оформлення замовлення по
                  буднях з 11:00 до 18:00. Якщо замовлення було попередньо
                  сплачено (банківською карткою, через мобільний додаток або
                  безготівковим розрахунком), то доставка буде здійснена
                  протягом 1-2 робочих днів після зарахування оплати на наш
                  розрахунковий рахунок.
                </p>
              </li>
              <li className={styles.delivery__payment_and_delivery_item}>
                <div
                  className={styles.delivery__payment_and_delivery_item__title}
                >
                  2. Доставка до ПВЗ
                </div>
                <p className={styles.delivery__text}>
                  Доставка до ПВЗ здійснюється після 100% оплати замовлення. При
                  замовленні 2500 гривень і більше доставка до ПВЗ здійснюється
                  безкоштовно, за меншої суми замовлення вартість доставки
                  складатиме 250 гривень. Замовлення передаються до служби
                  доставки протягом 1-2 робочих днів після надходження оплати
                  товару на наш розрахунковий рахунок. Після того, як Ваше
                  замовлення надійде до пункту видачі, на телефон прийде
                  SMS-повідомлення, замовлення зберігається в пункті видачі 14
                  календарних днів, можливе платне продовження зберігання.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.delivery__faq}>
            <h3 className={styles.delivery__subtitle}>
              Питання, які часто задають
            </h3>
            <div className={styles.delivery__questions}>
              <FaqContent />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DeliveryPage;
