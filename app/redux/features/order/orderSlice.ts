"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/utils/axios";
import { AxiosError } from "axios";
import { clearCart } from "../cart/cartSlice";

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  images?: string[];
}

export interface OrderUserData {
  username?: string;
  surname?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  localIndex?: string;
  dateOfBirth?: string;
  comment?: string;
}

export interface OrderTotals {
  subtotal?: number;
  discount?: number;
  deliveryPrice?: number;
  finalTotal?: number;
}

export interface OrderData {
  _id?: string;
  userData: OrderUserData;
  items: OrderItem[];
  totals: OrderTotals;
  payment: string;
  delivery: string;
  date?: string;
  status?: string;
}

export interface OrderCreatePayload {
  userData: OrderUserData;
  items: { productId: string; quantity: number }[];
  totals: OrderTotals;
  payment: string;
  delivery: string;
}

interface CreateOrderResponse {
  success: boolean;
  orderId: string;
  orderData: OrderData;
}

interface GetUserOrdersResponse {
  success: boolean;
  orders: OrderData[];
}

interface OrderState {
  loading: boolean;
  error: string | null;
  success: boolean;
  orderId: string | null;
  orderData: OrderData | null;
  userOrders: OrderData[];
  userOrdersLoading: boolean;
}

const initialState: OrderState = {
  loading: false,
  error: null,
  success: false,
  orderId: null,
  orderData: null,
  userOrders: [],
  userOrdersLoading: false,
};

// Створити замовлення
export const createOrder = createAsyncThunk<
  { orderId: string; orderData: OrderData },
  OrderCreatePayload,
  { rejectValue: string }
>("order/createOrder", async (payload, { dispatch, rejectWithValue }) => {
  try {
    const res = await axios.post<CreateOrderResponse>("/orders", payload, {
      withCredentials: true,
    });

    if (!res.data.success) {
      return rejectWithValue("Не вдалося створити замовлення");
    }

    dispatch(clearCart());

    return {
      orderId: res.data.orderId,
      orderData: res.data.orderData,
    };
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;

    return rejectWithValue(
      err.response?.data?.message || "Помилка створення замовлення",
    );
  }
});

// Отримати замовлення по ID
export const fetchOrderById = createAsyncThunk<
  OrderData,
  string,
  { rejectValue: string }
>("order/fetchOrderById", async (orderId, { rejectWithValue }) => {
  try {
    const res = await axios.get(`/orders/${orderId}`, {
      withCredentials: true,
    });

    if (!res.data.success) {
      return rejectWithValue("Замовлення не знайдено");
    }

    return res.data.orderData;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;

    return rejectWithValue(
      err.response?.data?.message || "Помилка при завантаженні замовлення",
    );
  }
});

// Отримати всі замовлення користувача
export const fetchUserOrders = createAsyncThunk<
  OrderData[],
  void,
  { rejectValue: string }
>("order/fetchUserOrders", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get<GetUserOrdersResponse>("/orders/user", {
      withCredentials: true,
    });

    if (!res.data.success) {
      return rejectWithValue("Не вдалося отримати замовлення");
    }

    return res.data.orders;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;

    return rejectWithValue(
      err.response?.data?.message || "Помилка при завантаженні замовлень",
    );
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.orderId = null;
      state.orderData = null;
    },
  },
  extraReducers: (builder) => {
    // createOrder
    builder.addCase(createOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });

    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.orderId = action.payload.orderId;
      state.orderData = action.payload.orderData;
    });

    builder.addCase(createOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Помилка створення замовлення";
      state.success = false;
    });

    // fetchOrderById
    builder.addCase(fetchOrderById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchOrderById.fulfilled, (state, action) => {
      state.loading = false;
      state.orderData = action.payload;
    });

    builder.addCase(fetchOrderById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Помилка при завантаженні замовлення";
    });

    // fetchUserOrders
    builder.addCase(fetchUserOrders.pending, (state) => {
      state.userOrdersLoading = true;
      state.error = null;
    });

    builder.addCase(fetchUserOrders.fulfilled, (state, action) => {
      state.userOrdersLoading = false;
      state.userOrders = action.payload;
    });

    builder.addCase(fetchUserOrders.rejected, (state, action) => {
      state.userOrdersLoading = false;
      state.error = action.payload || "Помилка при завантаженні замовлень";
    });
  },
});

export const { resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
