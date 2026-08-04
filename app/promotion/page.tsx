'use client';
import { Suspense } from "react";
import ProductsPage from "@/components/templates/ProductsPage/ProductsPage";
import { fetchPromotionalProducts } from "@/app/redux/features/products/productsSlice";

const Promotion = () => {
  // pageName використовується лише для ключа localStorage
  const pageName = "Акції";

  return (
    <Suspense fallback={null}>
      <ProductsPage
        pageName={pageName}
        fetchAction={fetchPromotionalProducts}
      />
    </Suspense>
  );
};

export default Promotion;
