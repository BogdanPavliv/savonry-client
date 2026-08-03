"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/styles/order-page/index.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import {
  fetchOrderById,
  resetOrder,
  OrderItem,
} from "@/app/redux/features/order/orderSlice";

const OrderPage = () => {
  const { orderId } = useParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  
  const { orderData, loading, error } = useSelector((state: RootState) => state.order);
  
  useEffect(() => {
    if (!orderId) {
      router.push("/");
      return;
    }

    dispatch(fetchOrderById(orderId as string));

    // Cleanup при виході зі сторінки
    return () => {
      dispatch(resetOrder());
    };
  }, [orderId, dispatch, router]);

  useEffect(() => {
    // Якщо помилка - редірект на головну
    if (error) {
      console.error("Помилка при завантаженні замовлення:", error);
      router.push("/");
    }
  }, [error, router]);

  if (loading) {
    return (
      <main className={styles.order}>
        <div className="container">
          <p>Завантаження...</p>
        </div>
      </main>
    );
  }

  if (!orderData) return null;

  const { items, totals, payment, delivery, date } = orderData;

  return (
    <main className={styles.order}>
      <div className="container">
        <div className={styles.order__success}>
          <div className={styles.order__success_icon}>✔</div>
          <h1 className={styles.order__title}>
            Ваше замовлення успішно оформлено!
          </h1>
          <p className={styles.order__subtitle}>
            Дякуємо за покупку. Ми вже почали його обробку.
          </p>
        </div>

        <div className={styles.order__info}>
          <h2 className={styles.order__info_title}>Деталі замовлення</h2>
          <div className={styles.order__info_grid}>
            <div className={styles.order__info_row}>
              <span>Номер замовлення:</span>
              <strong>#{orderId}</strong>
            </div>
            <div className={styles.order__info_row}>
              <span>Дата:</span>
              <strong>
                {date ? new Date(date).toLocaleDateString("uk-UA") : "-"}
              </strong>
            </div>
            <div className={styles.order__info_row}>
              <span>Спосіб оплати:</span>
              <strong>{payment}</strong>
            </div>
            <div className={styles.order__info_row}>
              <span>Спосіб доставки:</span>
              <strong>{delivery}</strong>
            </div>
            <div className={styles.order__info_row}>
              <span>Очікувана доставка:</span>
              <strong>2–3 дні</strong>
            </div>
          </div>
        </div>

        <div className={styles.order__products}>
          <h2 className={styles.order__products_title}>Товари у замовленні</h2>
          {items.map((item: OrderItem) => (
            <div key={item.productId} className={styles.order__product}>
              <Image
                src={
                  item.images?.[0]
                    ? `https://savonry-server-app-gki2.onrender.com${item.images[0]}`
                    : "/no-image.png"
                }
                alt={item.name}
                width={60}
                height={60}
                className={styles.order__product_img}
              />
              <div className={styles.order__product_info}>
                <p className={styles.order__product_name}>{item.name}</p>
                <p className={styles.order__product_price}>
                  {item.quantity} × {item.price} грн
                </p>
              </div>
              <p className={styles.order__product_total}>
                {item.quantity * item.price} грн
              </p>
            </div>
          ))}
          <div className={styles.order__total}>
            <span>Всього до оплати:</span>
            <strong>{totals.finalTotal} грн</strong>
          </div>
        </div>

        <div className={styles.order__note}>
          <span className={styles.order__note_icon}>ℹ️</span>
          Менеджер зв&apos;яжеться з вами за потреби
        </div>

        <button
          className={styles.order__home_btn}
          onClick={() => router.push("/")}
        >
          Повернутися на головну
        </button>
      </div>
    </main>
  );
};

export default OrderPage;