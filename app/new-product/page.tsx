'use client';
import ProductsPage from "@/components/templates/ProductsPage/ProductsPage";
import { fetchNewProducts } from "@/app/redux/features/products/productsSlice";

const NewProductsPage = () => {
  // pageName використовується для ключа localStorage
  const pageName = "Новинки";

  return (
    <ProductsPage
      pageName={pageName}
      fetchAction={fetchNewProducts}
    />
  );
};

export default NewProductsPage;
