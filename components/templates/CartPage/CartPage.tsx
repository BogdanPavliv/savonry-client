"use client";

import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { useAuthForm } from "@/hooks/useAuthForm";
import NameInput from "./../../modules/CartPage/NameInput";
import SurnameInput from "./../../modules/CartPage/SurnameInput";
import EmailInput from "./../../modules/CartPage/EmailInput";
import DateOfBirthInput from "./../../modules/CartPage/DateOfBirthInput";
import CityInput from "./../../modules/CartPage/CityInput";
import AddressInput from "./../../modules/CartPage/AddressInput";
import LocalIndexInput from "./../../modules/CartPage/LocalIndexInput";
import CommentTextArea from "./../../modules/CartPage/CommentTextArea";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import {
  fetchCart,
  addToCart,
  removeFromCart,
  clearCart,
} from "@/app/redux/features/cart/cartSlice";
import {
  validateCoupon,
  clearCoupon,
} from "@/app/redux/features/coupon/couponSlice";
import { createOrder, resetOrder } from "@/app/redux/features/order/orderSlice";
import styles from "@/styles/cart-page/index.module.scss";
import Banner from "@/components/modules/Banner/Banner";
import WatchedProducts from "@/components/modules/WatchedProducts/WatchedProducts";
import InterestedProducts from "@/components/modules/InterestedProducts/InterestedProducts";
import EmptyPageContent from "@/components/modules/EmptyPageContent/EmptyPageContent";
import Breadcrumbs from "@/components/modules/Breadcrumbs/Breadcrumbs";
import { useCatalogBreadcrumbs } from "@/hooks/useCatalogBreadcrumbs";
import { useRouter } from "next/navigation";
import { IInputs } from "@/types/authPopup";

const DELIVERY_PRICES: Record<string, number> = {
  "Кур'єром по Києву": 300,
  "CDEK До пункту видачі": 300,
  "Нова Пошта": 350,
  Укрпошта: 250,
};

const CartPage = () => {
  const router = useRouter();
  const breadcrumbs = useCatalogBreadcrumbs();
  const { register, errors, handleSubmit } = useAuthForm();
  const dispatch = useDispatch<AppDispatch>();

  // form state
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [localIndex, setLocalIndex] = useState("");
  const [comment, setComment] = useState("");

  const [isCheckout, setIsCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<
    "cash" | "cards" | "receipt"
  >("cash");
  const [deliveryMethod, setDeliveryMethod] = useState<
    "Кур'єром по Києву" | "CDEK До пункту видачі" | "Нова Пошта" | "Укрпошта"
  >("Кур'єром по Києву");
  const [couponInput, setCouponInput] = useState("");

  const { items } = useSelector((state: RootState) => state.cart);
  const couponState = useSelector((state: RootState) => state.coupon);
  const orderState = useSelector((state: RootState) => state.order);

  const subtotal = useMemo(
    () =>
      items?.reduce(
        (sum, item) => sum + (item.productId?.price || 0) * item.quantity,
        0
      ) || 0,
    [items]
  );
  const totalItems = useMemo(
    () => items?.reduce((sum, it) => sum + it.quantity, 0) || 0,
    [items]
  );
  const deliveryPrice = DELIVERY_PRICES[deliveryMethod] ?? 0;
  const finalTotal = subtotal - couponState.discount + deliveryPrice;

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleIncrease = (id: string) =>
    dispatch(addToCart({ productId: id, quantity: 1 }));
  const handleDecrease = (id: string, quantity: number) => {
    if (quantity > 1) dispatch(addToCart({ productId: id, quantity: -1 }));
    else dispatch(removeFromCart(id));
  };

  // Coupon actions
  const applyCoupon = () => {
    if (!couponInput.trim()) return;
    dispatch(validateCoupon(couponInput));
  };

  const removeCoupon = () => {
    setCouponInput("");
    dispatch(clearCoupon());
  };

  // Submit order using Redux thunk
  const submitOrder = (data: IInputs) => {
    if (!items || items.length === 0) {
      alert("Кошик порожній");
      return;
    }
    if (!username || !surname || !email) {
      alert("Будь ласка, заповніть ім'я, прізвище та email");
      return;
    }

    const payload = {
      userData: {
        username: data.username,
        surname: data.surname,
        email: data.email,
        dateOfBirth: data.dateOfBirth,
        city: data.city,
        address: data.address,
        localIndex: data.localIndex,
        comment: data.comment,
      },
      items: items.map((it) => ({
        productId: it.productId._id,
        quantity: it.quantity,
      })),
      totals: {
        subtotal,
        coupon: couponInput || null,
        discount: couponState.discount,
        deliveryPrice,
        finalTotal,
      },
      payment: paymentMethod,
      delivery: deliveryMethod,
    };

    dispatch(createOrder(payload));
  };

  // Navigate on order success
  useEffect(() => {
    if (orderState.success && orderState.orderId) {
      dispatch(clearCart());
      router.push(`/order-success/${orderState.orderId}`);
      dispatch(resetOrder());
    }
  }, [orderState.success, orderState.orderId, dispatch, router]);

  if (!items || items.length === 0) {
    return (
      <main className="main">
        <Breadcrumbs items={breadcrumbs} />
        <section className={styles.cart}>
          <div className="container">
            <h1 className={styles.cart__title}>Кошик</h1>
            <EmptyPageContent
              title="Ваш кошик порожній"
              subtitle="Додайте товари, щоб продовжити оформлення замовлення"
              buttonText="На головну"
              onButtonClick={() => router.push("/")}
            />
          </div>
        </section>
        <WatchedProducts />
        <InterestedProducts />
        <Banner />
      </main>
    );
  }

  return (
    <main className="main">
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.cart}>
        <div className="container">
          <h1 className={styles.cart__title}>Кошик</h1>
          <div className={styles.cart__inner}>
            <div className={styles.cart__top}>
              <div className={styles.cart__left}>
                <div className={styles.cart__empty_cart_btn__wrapper}>
                  <button
                    className={styles.cart__empty_cart_btn}
                    onClick={() => dispatch(clearCart())}
                  >
                    Очистити кошик
                  </button>
                </div>
                <ul className={styles.cart__list}>
                  {items.map((item) => (
                    <li key={item.productId._id} className={styles.cart__item}>
                      <div className={styles.cart__item_content}>
                        <Image
                          src={
                            item.productId.images?.[0]
                              ? `https://savonry-server-app-gki2.onrender.com${item.productId.images[0]}`
                              : "/no-image.png"
                          }
                          className={styles.cart__image}
                          alt={item.productId.name}
                          width={112}
                          height={113}
                        />
                        <h3 className={styles.cart__name}>
                          {item.productId.name}
                        </h3>
                        <div className={styles.cart__quantity}>
                          <button
                            onClick={() =>
                              handleDecrease(item.productId._id, item.quantity)
                            }
                            className={`${styles.cart__quantity__button} ${styles.cart__quantity__minus}`}
                            aria-label="decrease"
                          ></button>
                          <span className={styles.cart__quantity__span}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrease(item.productId._id)}
                            className={`${styles.cart__quantity__button} ${styles.cart__quantity__plus}`}
                            aria-label="increase"
                          ></button>
                        </div>
                        <div className={styles.cart__price}>
                          {item.productId.price * item.quantity} ₴
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          dispatch(removeFromCart(item.productId._id))
                        }
                        className={styles.cart__remove_btn}
                        aria-label="remove"
                      >
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 15.5L1 0.5M16 0.5L1 15.5"
                            stroke="#817E79"
                            className={styles.cart__remove_icon}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cart__right}>
                <div className={styles.cart__order}>
                  <h2 className={styles.cart__order_title}>Ваше замовлення</h2>
                  <div className={styles.cart__order_details}>
                    <div className={styles.cart__order_details_items}>
                      <div className={styles.cart__order_details_item}>
                        <div className={styles.cart__order_details_item_text}>
                          Сума:
                        </div>
                        <div className={styles.cart__order_details_item_value}>
                          {subtotal} ₴
                        </div>
                      </div>
                      <div className={styles.cart__order_details_item}>
                        <div className={styles.cart__order_details_item_text}>
                          Знижка:
                        </div>
                        <div className={styles.cart__order_details_item_value}>
                          - {couponState.discount} ₴
                        </div>
                      </div>
                    </div>

                    <div className={styles.cart__order_details_total}>
                      <div className={styles.cart__order_details_total_text}>
                        Разом:
                      </div>
                      <div className={styles.cart__order_details_total_value}>
                        {subtotal - couponState.discount} ₴
                      </div>
                    </div>

                    <form
                      className={styles.cart__order_details_coupon_form}
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className={styles.cart__order_details_coupon}>
                        <input
                          className={styles.cart__order_details_coupon_input}
                          type="text"
                          placeholder="Код купона"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                        />
                        <button
                          className={styles.cart__order_details_coupon_btn}
                          type="button"
                          onClick={applyCoupon}
                        >
                          Застосувати
                        </button>
                        {couponState.discount > 0 && (
                          <button
                            type="button"
                            onClick={removeCoupon}
                            style={{ marginLeft: 8 }}
                          >
                            Видалити
                          </button>
                        )}
                      </div>
                      {couponState.error && (
                        <div style={{ color: "red", marginTop: 6 }}>
                          {couponState.error}
                        </div>
                      )}
                      <button
                        className={styles.cart__order_details_checkout_btn}
                        type="button"
                        onClick={() => setIsCheckout(true)}
                      >
                        Перейти до оформлення
                      </button>
                    </form>

                    <div className={styles.cart__order_details_info}>
                      Додайте в кошик товарів на 810 ₴ і отримайте безкоштовну
                      доставку
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isCheckout && (
              <div className={styles.cart__bottom}>
                <div className={styles.cart__placing__order}>
                  <h2 className={styles.cart__placing__order__title}>
                    Оформлення замовлення
                  </h2>
                  <div className={styles.cart__placing__order__details}>
                    <form
                      action="#"
                      className={styles.cart__placing__order__details__form}
                      onSubmit={handleSubmit(submitOrder)}
                    >
                      <h3 className={styles.cart__placing__order__subtitle}>
                        Контактні дані
                      </h3>
                      <div className={styles.cart__placing__inputs}>
                        <NameInput
                          register={register}
                          errors={errors}
                          username={username}
                          setUsername={setUsername}
                        />
                        <SurnameInput
                          register={register}
                          errors={errors}
                          surname={surname}
                          setSurname={setSurname}
                        />
                        <EmailInput
                          register={register}
                          errors={errors}
                          email={email}
                          setEmail={setEmail}
                        />
                        <DateOfBirthInput
                          register={register}
                          errors={errors}
                          dateOfBirth={dateOfBirth}
                          setDateOfBirth={setDateOfBirth}
                        />
                        <CityInput
                          register={register}
                          errors={errors}
                          city={city}
                          setCity={setCity}
                        />
                        <AddressInput
                          register={register}
                          errors={errors}
                          address={address}
                          setAddress={setAddress}
                        />
                        <LocalIndexInput
                          register={register}
                          errors={errors}
                          localIndex={localIndex}
                          setLocalIndex={setLocalIndex}
                        />
                      </div>

                      <h3 className={styles.cart__placing__order__subtitle}>
                        Ви можете залишити свій коментар
                      </h3>
                      <div className={styles.cart__placing__textarea__wrapper}>
                        <CommentTextArea
                          register={register}
                          errors={errors}
                          comment={comment}
                          setComment={setComment}
                        />
                      </div>

                      {/* Payment and Delivery Options */}
                      <div className={styles.cart__placing__radiobtns}>
                        <div className={styles.cart__placing__payment}>
                          <h3 className={styles.cart__placing__order__subtitle}>
                            Спосіб оплати
                          </h3>
                          <label
                            className={styles.cart__placing__radiobtn__label}
                            htmlFor="cash"
                          >
                            <input
                              className={styles.cart__placing__radiobtn}
                              type="radio"
                              name="payment"
                              id="cash"
                              checked={paymentMethod === "cash"}
                              onChange={() => setPaymentMethod("cash")}
                            />
                            <span className={styles.cart__placing__span}></span>
                            Оплата готівкою
                          </label>
                          <label
                            className={styles.cart__placing__radiobtn__label}
                            htmlFor="cards"
                          >
                            <input
                              className={styles.cart__placing__radiobtn}
                              type="radio"
                              name="payment"
                              id="cards"
                              checked={paymentMethod === "cards"}
                              onChange={() => setPaymentMethod("cards")}
                            />
                            <span className={styles.cart__placing__span}></span>
                            Оплата картками Visa/MasterCard онлайн
                          </label>
                          <label
                            className={styles.cart__placing__radiobtn__label}
                            htmlFor="receipt"
                          >
                            <input
                              className={styles.cart__placing__radiobtn}
                              type="radio"
                              name="payment"
                              id="receipt"
                              checked={paymentMethod === "receipt"}
                              onChange={() => setPaymentMethod("receipt")}
                            />
                            <span className={styles.cart__placing__span}></span>
                            Оплата квитанцією або банківський переказ
                          </label>
                        </div>

                        <div className={styles.cart__placing__delivery}>
                          <h3 className={styles.cart__placing__order__subtitle}>
                            Спосіб доставки
                          </h3>
                          {Object.entries(DELIVERY_PRICES).map(
                            ([method, price]) => (
                              <label
                                key={method}
                                className={
                                  styles.cart__placing__radiobtn__label
                                }
                                htmlFor={method}
                              >
                                <input
                                  className={styles.cart__placing__radiobtn}
                                  type="radio"
                                  name="delivery"
                                  id={method}
                                  checked={deliveryMethod === method}
                                  onChange={() =>
                                    setDeliveryMethod(
                                      method as
                                        | "Кур'єром по Києву"
                                        | "CDEK До пункту видачі"
                                        | "Нова Пошта"
                                        | "Укрпошта"
                                    )
                                  }
                                />
                                <span
                                  className={styles.cart__placing__span}
                                ></span>
                                {method} — {price} грн.
                              </label>
                            )
                          )}
                        </div>
                      </div>

                      <div className={styles.cart__placing__confirmation}>
                        <h3 className={styles.cart__placing__order__subtitle}>
                          Підтвердження замовлення
                        </h3>
                        <div
                          className={styles.cart__placing__confirmation__inner}
                        >
                          <div
                            className={styles.cart__placing__confirmation__left}
                          >
                            <ul
                              className={
                                styles.cart__placing__confirmation__list
                              }
                            >
                              <li
                                className={
                                  styles.cart__placing__confirmation__item
                                }
                              >
                                <div
                                  className={
                                    styles.cart__placing__confirmation__item__content
                                  }
                                >
                                  <div
                                    className={
                                      styles.cart__placing__confirmation__item__text
                                    }
                                  >
                                    Товарів:
                                  </div>
                                  <div
                                    className={
                                      styles.cart__placing__confirmation__item__text
                                    }
                                  >
                                    {totalItems} шт
                                  </div>
                                </div>
                              </li>
                              <li
                                className={
                                  styles.cart__placing__confirmation__item
                                }
                              >
                                <div
                                  className={
                                    styles.cart__placing__confirmation__item__content
                                  }
                                >
                                  <div
                                    className={
                                      styles.cart__placing__confirmation__item__text
                                    }
                                  >
                                    Сума замовлення:
                                  </div>
                                  <div
                                    className={
                                      styles.cart__placing__confirmation__item__text
                                    }
                                  >
                                    {subtotal} ₴
                                  </div>
                                </div>
                              </li>
                              <li
                                className={
                                  styles.cart__placing__confirmation__item
                                }
                              >
                                <div
                                  className={
                                    styles.cart__placing__confirmation__item__content
                                  }
                                >
                                  <div
                                    className={
                                      styles.cart__placing__confirmation__item__text
                                    }
                                  >
                                    Доставка:
                                  </div>
                                  <div
                                    className={
                                      styles.cart__placing__confirmation__item__text
                                    }
                                  >
                                    {deliveryPrice} ₴
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div
                            className={
                              styles.cart__placing__confirmation__right
                            }
                          >
                            <div className={styles.cart__placing__total}>
                              <div className={styles.cart__placing__total__top}>
                                <h3
                                  className={styles.cart__placing__total__text}
                                >
                                  Разом:
                                </h3>
                                <h3
                                  className={styles.cart__placing__total__text}
                                >
                                  {finalTotal} ₴
                                </h3>
                              </div>
                              <div
                                className={styles.cart__placing__total__bottom}
                              >
                                <button
                                  className={styles.cart__placing__btn}
                                  type="submit"
                                  disabled={orderState.loading}
                                >
                                  {orderState.loading
                                    ? "Обробка..."
                                    : "Сплатити"}
                                </button>
                                {orderState.error && (
                                  <div style={{ color: "red", marginTop: 6 }}>
                                    {orderState.error}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <WatchedProducts />
      <InterestedProducts />
      <Banner />
    </main>
  );
};

export default CartPage;