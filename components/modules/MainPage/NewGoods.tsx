"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewProducts } from "@/app/redux/features/products/productsSlice";
import { RootState, AppDispatch } from "@/app/redux/store";
import MainPageSection from "@/components/modules/MainPage/MainPageSection";

const NewGoods = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    // Викликаємо fetchNewProducts без параметрів (за замовчуванням offset=0, limit=12)
    dispatch(fetchNewProducts({ limit: 12 }));
  }, [dispatch]);

  if (!products.length) {
    return null;
  }

  return (
    <MainPageSection
      products={products}
      loading={loading}
      error={error}
      title="Новинки"
    />
  );
};

export default NewGoods;