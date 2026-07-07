"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestsellerProducts } from "@/app/redux/features/products/productsSlice";
import { RootState, AppDispatch } from "@/app/redux/store";
import MainPageSection from "@/components/modules/MainPage/MainPageSection";

const BestsellerGoods = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchBestsellerProducts({ limit: 12 }));
  }, [dispatch]);

  if (!products.length) {
    return null;
  }

  return (
    <MainPageSection
      products={products}
      loading={loading}
      error={error}
      title="Хіти продаж"
    />
  );
};

export default BestsellerGoods;