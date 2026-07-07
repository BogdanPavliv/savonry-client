"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import { fetchUserOrders } from "@/app/redux/features/order/orderSlice";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
// import styles from "@/styles/order-history/order-history.module.scss";
import styles from "@/styles/profile/index.module.scss";
import { OrderHistoryFormProps } from "@/types/others";

const OrderHistoryForm: React.FC<OrderHistoryFormProps> = ({ user }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { userOrders, userOrdersLoading, error } = useSelector(
    (state: RootState) => state.order
  );
  const isMedia768 = useMediaQuery(768);
  const [expandedOrders, setExpandedOrders] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  useEffect(() => {
    if (user) {
      dispatch(fetchUserOrders());
    }
  }, [dispatch, user]);

  const toggleOrderExpand = (orderId: string) => {
    setExpandedOrders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(orderId)) {
        newSet.delete(orderId);
      } else {
        newSet.add(orderId);
      }
      return newSet;
    });
  };

  const getStatusText = (status?: string) => {
    const statusMap: Record<string, string> = {
      pending: "Очікується",
      paid: "Оплачено",
      processing: "В обробці",
      shipped: "Відправлено",
      delivered: "Доставлено",
      cancelled: "Скасовано",
    };
    return statusMap[status || "pending"] || "Невідомо";
  };

  const getStatusColor = (status?: string) => {
    const colorMap: Record<string, string> = {
      pending: "#FFA500",
      paid: "#4CAF50",
      processing: "#2196F3",
      shipped: "#9C27B0",
      delivered: "#4CAF50",
      cancelled: "#F44336",
    };
    return colorMap[status || "pending"] || "#757575";
  };

  const formatDate = (date?: string) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("uk-UA", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = userOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(userOrders.length / ordersPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (userOrdersLoading) {
    return (
      <div className={styles.profile__order_history}>
        <h2 className={styles.profile__order_history__title}>Історія замовлень</h2>
        <div className={styles.profile__order_history__loading}>Завантаження...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.profile__order_history}>
        <h2 className={styles.profile__order_history__title}>Історія замовлень</h2>
        <div className={styles.profile__order_history__error}>Помилка: {error}</div>
      </div>
    );
  }

  if (userOrders.length === 0) {
    return (
      <div className={styles.profile__order_history}>
        <h2 className={styles.profile__order_history__title}>Історія замовлень</h2>
        <div className={styles.profile__order_history__empty}>
          У вас поки немає замовлень
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profile__order_history}>
      <h2 className={styles.profile__order_history__title}>Історія замовлень</h2>

      <div className={styles.profile__order_history__list}>
        {!isMedia768 && (
          <div className={styles.profile__order_history__thead}>
            <div className={styles.profile__order_history__th}>Дата</div>
            <div className={styles.profile__order_history__th}>Номер замовлення</div>
            <div className={styles.profile__order_history__th}>Сума замовлення</div>
            <div className={styles.profile__order_history__th}>Статус</div>
          </div>
        )}
        {currentOrders.map((order) => (
          <div key={order._id} className={styles.profile__order_history__item}>
            {!isMedia768 && (
              <div
                className={styles.profile__order_history__header}
                onClick={() => toggleOrderExpand(order._id || "")}
              >
                <div className={styles.profile__order_history__date}>
                  {formatDate(order.date)}
                </div>
                <div className={styles.profile__order_history__number}>
                  {order._id?.slice(-8)}
                </div>

                <div className={styles.profile__order_history__total}>
                  {order.totals?.finalTotal} ₴
                </div>
                <div
                  className={styles.profile__order_history__status}
                  style={{ color: getStatusColor(order.status) }}
                >
                  {getStatusText(order.status)}
                </div>
                <button
                  className={`${
                    expandedOrders.has(order._id || "")
                      ? `${styles.profile__order_history__toggle} ${styles.profile__order_history__toggle_active}`
                      : styles.profile__order_history__toggle
                  }`}
                  aria-label={
                    expandedOrders.has(order._id || "")
                      ? "Згорнути"
                      : "Розгорнути"
                  }
                ></button>
              </div>
            )}
            {isMedia768 && (
              <div
                className={styles.profile__order_history__header}
                onClick={() => toggleOrderExpand(order._id || "")}
              >
                {" "}
                <div className={styles.profile__order_history__row}>
                  <div className={styles.profile__order_history__text}>Дата</div>
                  <div className={styles.profile__order_history__date}>
                    {formatDate(order.date)}
                  </div>
                </div>
                <div className={styles.profile__order_history__row}>
                  <div className={styles.profile__order_history__text}>Номер замовлення</div>
                  <div className={styles.profile__order_history__number}>
                    {order._id?.slice(-8)}
                  </div>
                </div>
                <div className={styles.profile__order_history__row}>
                  <div className={styles.profile__order_history__text}>Сума замовлення</div>
                  <div className={styles.profile__order_history__total}>
                    {order.totals?.finalTotal} ₴
                  </div>
                </div>
                <div className={styles.profile__order_history__row}>
                  <div className={styles.profile__order_history__text}>Статус</div>
                  <div
                    className={styles.profile__order_history__status}
                    style={{ color: getStatusColor(order.status) }}
                  >
                    {getStatusText(order.status)}
                  </div>
                </div>
                <button
                  className={`${
                    expandedOrders.has(order._id || "")
                      ? `${styles.profile__order_history__toggle} ${styles.profile__order_history__toggle_active}`
                      : styles.profile__order_history__toggle
                  }`}
                  aria-label={
                    expandedOrders.has(order._id || "")
                      ? "Згорнути"
                      : "Розгорнути"
                  }
                ></button>
              </div>
            )}

            {expandedOrders.has(order._id || "") && (
              <div className={styles.profile__order_history__details}>
                <div className={styles.profile__order_history__products}>
                  <ul className={styles.profile__order_history__products_list}>
                    {order.items.map((item, idx) => (
                      <li
                        key={idx}
                        className={styles.profile__order_history__product_item}
                      >
                        <Image
                          src={
                            item.images?.[0]
                              ? `http://localhost:3002${item.images[0]}`
                              : "/no-image.png"
                          }
                          alt={item.name}
                          width={130}
                          height={130}
                          className={styles.profile__order_history__product_image}
                        />
                        <div className={styles.profile__order_history__product_info}>
                          <div className={styles.profile__order_history__product_name}>
                            {item.name}
                          </div>
                          <div className={styles.profile__order_history__product_price}>
                            {item.price} ₴ × {item.quantity} шт
                          </div>
                        </div>
                        <div className={styles.profile__order_history__product_total}>
                          {item.price * item.quantity} ₴
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.profile__order_history__pagination}>
          <button
            className={styles.profile__order_history__pagination_btn}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ←
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`${styles.profile__order_history__pagination_btn} ${
                currentPage === page
                  ? styles.profile__order_history__pagination_btn_active
                  : ""
              }`}
              onClick={() => paginate(page)}
            >
              {page}
            </button>
          ))}

          <button
            className={styles.profile__order_history__pagination_btn}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryForm;
