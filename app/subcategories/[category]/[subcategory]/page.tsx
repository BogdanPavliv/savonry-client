'use client';
import ProductsPage from "@/components/templates/ProductsPage/ProductsPage";
import { useParams, notFound } from "next/navigation";
import { Suspense, useEffect } from "react";
import { fetchProductsBySubcategory } from "@/app/redux/features/products/productsSlice";

const Subcategory = () => {
  const params = useParams();

  const subcategoryParam = Array.isArray(params.subcategory)
    ? params.subcategory[0]
    : params.subcategory;

  if (!subcategoryParam) {
    notFound();
  }

  // ✅ Розкодовуємо кириличні символи
  const decodedSubcategory = decodeURIComponent(subcategoryParam);

  // ✅ Зберігаємо останню відвідану підкатегорію
  useEffect(() => {
    localStorage.setItem("lastSubcategory", decodedSubcategory);
  }, [decodedSubcategory]);

  // ✅ Передаємо thunk та параметри у ProductsPage
  return (
    <Suspense fallback={null}>
      <ProductsPage
        pageName={decodedSubcategory}
        fetchAction={fetchProductsBySubcategory}
        extraParams={{ subcategory: decodedSubcategory }}
      />
    </Suspense>
  );
};

export default Subcategory;
