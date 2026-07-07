"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import {
  checkOffsetParam,
} from '@/lib/utils/common'
import styles from "@/styles/catalog/index.module.scss";

export const useProductsPagination = (
  pageName: string,
  fetchAction: any,
  extraParams: Record<string, any> = {}
) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error, totalProducts } = useSelector(
    (state: RootState) => state.products
  );

  const pagesCount = Math.ceil((totalProducts || 12) / 12);

  // ✅ Використовуємо offset замість page
  const offsetParam = searchParams.get("offset");
  const isValidOffset = checkOffsetParam(offsetParam);
  const [currentPage, setCurrentPage] = useState(
    isValidOffset ? Number(offsetParam) : 0
  );

  const prevCategory = useRef<string | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  // ✅ Скидаємо пагінацію при зміні категорії
  useEffect(() => {
    const offset = searchParams.get("offset");
    const validOffset = checkOffsetParam(offset) ? Number(offset) : 0;

    if (prevCategory.current && prevCategory.current !== pageName) {
      setCurrentPage(0);
      router.replace(`${pathname}?offset=0`);
    } else {
      setCurrentPage(validOffset);
      router.replace(`${pathname}?offset=${validOffset}`);
    }

    prevCategory.current = pageName;
  }, [pageName]);

  // ✅ Завантаження даних при зміні сторінки (offset)
  useEffect(() => {
    if (!fetchAction || !pageName) return;

    if (controllerRef.current) controllerRef.current.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    const fetchData = async () => {
      try {
        await dispatch(
          fetchAction({
            ...extraParams,
            limit: 12,
            offset: currentPage * 12,
          })
        ).unwrap();
      } catch (err: any) {
        if (err.name !== "AbortError")
          console.error("Pagination fetch error:", err);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [currentPage, pageName, JSON.stringify(extraParams)]);

  // ✅ Обробка зміни сторінки
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    router.push(`${pathname}?offset=${selected}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Налаштування для ReactPaginate
  const paginationProps = {
    previousLabel: "",
    nextLabel: "",
    breakLabel: "...",
    pageCount: pagesCount,
    forcePage: currentPage,
    onPageChange: handlePageChange,
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
    paginationProps,
    currentPage,
    pagesCount,
  };
};
