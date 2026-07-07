"use client";
import { Dispatch, SetStateAction } from "react";

export interface IProductPageProps {
  productId: string
  category: string
}

interface ImageType {
  original: string;
}

export interface ProductType {
  _id?: string;
  name?: string; // <-- було name: string
  images: ImageType[];
  price?: number;
  category?: string;
  vendorCode?: string;
  volume?: string | number;
  type?: string;
  inStock?: boolean;
  description?: string;
  readMore?: string;
  composition?: string;
}

export interface ProductPageContentProps {
  product: ProductType;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  handleAddToCart: () => void;
}

export interface IProductInfoAccordionProps {
  children: React.ReactNode
  title: string
}

export type EmptyPageContentProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface UserType {
  cart: CartItem[];
}
