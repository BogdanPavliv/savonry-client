"use client";
import ProductsPage from "@/components/templates/ProductsPage/ProductsPage";
import { useParams, notFound } from "next/navigation";
import { useEffect } from "react";
import { fetchProductsByCategory } from "@/app/redux/features/products/productsSlice";

const Category = () => {
  const params = useParams();
  const categoryParam = Array.isArray(params.category)
    ? params.category[0]
    : params.category;

  if (!categoryParam) notFound();

  const decodedCategory = decodeURIComponent(categoryParam);

  useEffect(() => {
    localStorage.setItem("lastCategory", decodedCategory);
  }, [decodedCategory]);

  return (
    <ProductsPage
      pageName={decodedCategory}
      fetchAction={fetchProductsByCategory}
      extraParams={{ category: decodedCategory }}
    />
  );
};

export default Category;