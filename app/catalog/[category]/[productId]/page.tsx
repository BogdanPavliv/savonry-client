"use client";

import { useParams, notFound } from "next/navigation";
import ProductPage from "@/components/templates/ProductPage/ProductPage";

const Product = () => {
  const params = useParams();
  const categoryParam = Array.isArray(params.category) ? params.category[0] : params.category
  const productId = Array.isArray(params.productId)
    ? params.productId[0]
    : params.productId;
    
  if (!categoryParam || !productId) {
    notFound();
  }

  // ✅ Розкодовуємо кириличні символи
  const decodedCategory = decodeURIComponent(categoryParam);

  const сategoryUpperCase = decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);

  return <ProductPage productId={productId} category={сategoryUpperCase} />;
};

export default Product;
