import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth/authSlice";
import headerReducer from '../redux/headerSlice';
import AuthPopupReducer from './authPopupSlice';
import SearchPopupReducer from './searchPopupSlice';
import productsReducer from './features/products/productsSlice'; // 👈 Додаємо
import cartReducer from "./features/cart/cartSlice"; // ⬅️ додаємо
import couponReducer from "./features/coupon/couponSlice";
import orderReducer from "./features/order/orderSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    header: headerReducer,
    authPopup: AuthPopupReducer,
    searchPopup: SearchPopupReducer,
    products: productsReducer, // 👈 Додаємо редʼюсер
    cart: cartReducer, // ⬅️ тут
    coupon: couponReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
