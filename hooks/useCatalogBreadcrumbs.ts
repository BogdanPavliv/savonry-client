// hooks/useCatalogBreadcrumbs.ts
import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { BreadcrumbItem } from "@/types/others";

export const useCatalogBreadcrumbs = () => {
  const pathname = usePathname();
  const [productName, setProductName] = useState<string>("");

  // Слухаємо зміни назви продукту
  useEffect(() => {
    const handleProductNameUpdate = () => {
      if (typeof window !== "undefined") {
        setProductName((window as any).__currentProductName || "");
      }
    };

    // Оновлюємо при mount
    handleProductNameUpdate();

    // Слухаємо подію оновлення
    window.addEventListener("productNameUpdate", handleProductNameUpdate);
    
    return () => {
      window.removeEventListener("productNameUpdate", handleProductNameUpdate);
    };
  }, []);

  const breadcrumbs = useMemo(() => {
    const paths = pathname.split('/').filter(Boolean);
    
    // Базові breadcrumbs
    const items: BreadcrumbItem[] = [{ label: "Головна", href: "/" }];
    
    // Перевіряємо тип сторінки
    const isSubcategories = paths[0] === 'subcategories';
    const isCatalog = paths[0] === 'catalog';
    const isProfile = paths[0] === 'profile';
    const isCart = paths[0] === 'cart';
    const isOurNews = paths[0] === 'our-news';
    const isForWholesalers = paths[0] === 'for-wholesalers';
    const isAbout = paths[0] === 'about';
    const isContacts = paths[0] === 'contacts';
    const isDelivery = paths[0] === 'delivery';
    
    if (isDelivery) {
      // DELIVERY ROUTE
      items.push({ label: "Доставка та оплата" });
    } else if (isContacts) {
      // CONTACTS ROUTE
      items.push({ label: "Контакти" });
    } else if (isAbout) {
      // ABOUT ROUTE
      items.push({ label: "Про нас" });
    } else if (isForWholesalers) {
      // FOR-WHOLESALERS ROUTE
      items.push({ label: "Оптовикам" });
    } else if (isOurNews) {
      // OUR-NEWS ROUTE
      items.push({ label: "Наші новини" });
    } else if (isCart) {
      // CART ROUTE
      items.push({ label: "Кошик" });
    } else if (isProfile) {
      // PROFILE ROUTE
      items.push({ label: "Мій профіль" });
    } else if (isCatalog) {
      // CATALOG ROUTES
      if (paths.length === 1) {
        // /catalog
        items.push({ label: "Каталог" });
      } else if (paths.length >= 2) {
        // /catalog/обличчя або /catalog/обличчя/productId
        items.push({ label: "Каталог", href: "/catalog" });
        
        const category = decodeURIComponent(paths[1]);
        const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
        
        if (paths.length === 2) {
          // Тільки категорія
          items.push({ label: capitalizedCategory });
        } else if (paths.length >= 3) {
          // Категорія + продукт
          items.push({ label: capitalizedCategory, href: `/catalog/${paths[1]}` });
          
          if (productName) {
            items.push({ label: productName });
          }
        }
      }
    } else if (isSubcategories) {
      // SUBCATEGORIES ROUTES
      items.push({ label: "Каталог", href: "/catalog" });
      
      if (paths.length >= 2) {
        const category = decodeURIComponent(paths[1]);
        const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
        items.push({ label: capitalizedCategory, href: `/catalog/${paths[1]}` });
        
        if (paths.length >= 3) {
          // /subcategories/категорія/підкатегорія
          const subcategory = decodeURIComponent(paths[2]);
          const capitalizedSubcategory = subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
          
          if (paths.length === 3) {
            // Тільки підкатегорія
            items.push({ label: capitalizedSubcategory });
          } else if (paths.length >= 4) {
            // Підкатегорія + продукт
            items.push({ 
              label: capitalizedSubcategory, 
              href: `/subcategories/${paths[1]}/${paths[2]}` 
            });
            
            if (productName) {
              items.push({ label: productName });
            }
          }
        }
      }
    }
    
    return items;
  }, [pathname, productName]);

  return breadcrumbs;
};