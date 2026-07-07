'use client';
import ProductsPage from "@/components/templates/ProductsPage/ProductsPage";
import { fetchPromotionalProducts } from "@/app/redux/features/products/productsSlice";

const Promotion = () => {
  // pageName використовується лише для ключа localStorage
  const pageName = "Акції";

  return (
    <ProductsPage
      pageName={pageName}
      fetchAction={fetchPromotionalProducts}
    />
  );
};

export default Promotion;
