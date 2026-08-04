'use client';
import { Suspense } from "react";
import ProductsPage from "@/components/templates/ProductsPage/ProductsPage";
import { fetchNewProducts } from "@/app/redux/features/products/productsSlice";

const NewProductsPage = () => {
  // pageName використовується для ключа localStorage
  const pageName = "Новинки";

  return (
    <Suspense fallback={null}>
      <ProductsPage
        pageName={pageName}
        fetchAction={fetchNewProducts}
      />
    </Suspense>
  );
};

export default NewProductsPage;
