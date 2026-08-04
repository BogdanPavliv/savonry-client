"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  clearSelectedProduct,
  fetchProductById,
} from "@/app/redux/features/products/productsSlice";
import { addToCart } from "@/app/redux/features/cart/cartSlice";
import { IProductPageProps, ProductType, CartItem } from "@/types/product";
import { usePageTitle } from "@/hooks/usePageTitle";
import ProductPageContent from "@/components/modules/ProductPage/ProductPageContent";
import styles from "@/styles/product/index.module.scss";

const ProductPage = ({ productId, category }: IProductPageProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedProduct, loading } = useSelector(
    (state: RootState) => state.products
  );

  const { user } = useSelector((state: RootState) => state.auth);

  const [quantity, setQuantity] = useState<number>(1);

  // 🔹 Оновлюємо кількість у кошику, якщо є такий товар
  useEffect(() => {
    if (user?.cart && productId) {
      const existingProduct: CartItem | undefined = user.cart.find(
        (item: CartItem) => item.productId === productId
      );
      if (existingProduct) {
        setQuantity(existingProduct.quantity);
      }
    }
  }, [user, user?.cart, productId]);

  // 🔹 Отримуємо продукт
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [productId, dispatch]);

  // ✅ Викликаємо хук завжди (щоб не порушити порядок хуків)
  usePageTitle(category, selectedProduct?.name ?? "");

  useEffect(() => {
    if (selectedProduct?._id) {
      const watched = JSON.parse(localStorage.getItem("watchedProducts") || "[]");

      // якщо такого товару ще немає в списку
      if (!watched.includes(selectedProduct._id)) {
        const updated = [selectedProduct._id, ...watched].slice(0, 12); // максимум 12
        localStorage.setItem("watchedProducts", JSON.stringify(updated));
      }
    }
  }, [selectedProduct]);

  // 🔹 Передаємо назву продукту в layout через window
  useEffect(() => {
    if (selectedProduct?.name) {
      // Зберігаємо в глобальний об'єкт для доступу з layout
      if (typeof window !== "undefined") {
        const currentWindow = window as Window & {
          __currentProductName?: string;
        };
        currentWindow.__currentProductName = selectedProduct.name;
        // Тригеримо подію для оновлення breadcrumbs
        window.dispatchEvent(new CustomEvent("productNameUpdate"));
      }
    }
    return () => {
      if (typeof window !== "undefined") {
        const currentWindow = window as Window & {
          __currentProductName?: string;
        };
        delete currentWindow.__currentProductName;
        window.dispatchEvent(new CustomEvent("productNameUpdate"));
      }
    };
  }, [selectedProduct?.name]);

  // 🔹 Нормалізуємо структуру зображень
  const product: ProductType = {
    ...selectedProduct,
    images:
      selectedProduct?.images?.map((img: string) => ({
        original: img,
      })) ?? [],
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(
        addToCart({
          productId: selectedProduct._id,
          quantity,
        })
      );
    }
  };

  return (
    <>
      {loading ? (
        <div className={styles.product__preloader}>
          <FontAwesomeIcon icon={faSpinner} spin size="8x" />
        </div>
      ) : product.name ? (
        <ProductPageContent
          product={product}
          quantity={quantity}
          setQuantity={setQuantity}
          handleAddToCart={handleAddToCart}
        />
      ) : (
        <div>Товар не знайдено</div>
      )}
    </>
  );
};

export default ProductPage;