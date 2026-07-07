"use client";
import ProductsPage from "@/components/templates/ProductsPage/ProductsPage";
import { fetchProducts } from "@/app/redux/features/products/productsSlice";

const AllProducts = () => {
  return (
    <ProductsPage
      pageName="Всі товари"
      fetchAction={fetchProducts}
    />
  );
};

export default AllProducts;