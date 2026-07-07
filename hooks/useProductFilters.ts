"use client";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import styles from "@/styles/catalog/index.module.scss";

export const useProductFilters = (
  pageName: string, // наприклад: category або subcategory
  fetchAction: any,
  extraParams: Record<string, any> = {}
) => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error, totalPages } = useSelector(
    (state: RootState) => state.products
  );

  const [page, setPage] = useState<number>(1);
  const prevPageName = useRef<string | null>(null);
  const initialized = useRef(false);
  const abortController = useRef<AbortController | null>(null);

  // === Ініціалізація сторінки з localStorage ===
  useEffect(() => {
    const saved = localStorage.getItem(`page_${pageName}`);
    const initialPage = saved ? parseInt(saved, 10) : 1;
    setPage(initialPage);
  }, [pageName]);

  // === Основна логіка фетчу ===
  useEffect(() => {
    if (!fetchAction || !pageName) return;

    // Якщо категорія змінилася — скидаємо сторінку
    if (prevPageName.current && prevPageName.current !== pageName) {
      setPage(1);
      localStorage.setItem(`page_${pageName}`, "1");
      prevPageName.current = pageName;
      return; // дочекаємось наступного useEffect після оновлення page
    }

    prevPageName.current = pageName;

    // Скасувати попередній запит
    if (abortController.current) abortController.current.abort();
    const controller = new AbortController();
    abortController.current = controller;

    const fetchData = async () => {
      try {
        await dispatch(
          fetchAction({
            ...extraParams,
            page,
            limit: 12,
          })
        ).unwrap();
      } catch (err: any) {
        if (err.name !== "AbortError") console.error("Fetch error:", err);
      }
    };

    // Виконуємо лише після ініціалізації, щоб уникнути подвійного запуску
    if (!initialized.current) {
      initialized.current = true;
      fetchData();
    } else {
      fetchData();
    }

    localStorage.setItem(`page_${pageName}`, String(page));

    return () => controller.abort();
  }, [dispatch, fetchAction, page, pageName, JSON.stringify(extraParams)]);

  // === Обробка зміни сторінки ===
  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    setPage(newPage);
    localStorage.setItem(`page_${pageName}`, String(newPage));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const paginationProps = {
    pageCount: totalPages || 1,
    forcePage: page - 1,
    onPageChange: handlePageChange,
    previousLabel: "",
    nextLabel: "",
    breakLabel: "...",
    containerClassName: styles.pagination,
    activeClassName: styles.active,
    pageClassName: styles.pageItem,
    pageLinkClassName: styles.pageLink,
    previousLinkClassName: styles.pageLink,
    nextLinkClassName: styles.pageLink,
    breakLinkClassName: styles.pageLink,
    previousClassName: styles.pageItem,
    nextClassName: styles.pageItem,
    disabledClassName: styles.disabled,
  };

  return {
    products,
    loading,
    error,
    page,
    totalPages,
    paginationProps,
  };
};
