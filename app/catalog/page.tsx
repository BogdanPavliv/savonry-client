"use client";
import { Suspense } from "react";
import ProductsPage from "@/components/templates/ProductsPage/ProductsPage";
import { fetchProducts } from "@/app/redux/features/products/productsSlice";

const AllProducts = () => {
  return (
    <Suspense fallback={null}>
      <ProductsPage
        pageName="Всі товари"
        fetchAction={fetchProducts}
      />
    </Suspense>
  );
};

export default AllProducts;