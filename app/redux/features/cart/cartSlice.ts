// cartSlice.ts
"use client";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import axios from "../../../../lib/utils/axios";

interface CartItem {
  productId: {
    _id: string;
    name: string;
    price: number;
    images?: string[];
  };
  quantity: number;
}

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

interface CartErrorResponse {
  message?: string;
}

const getCartErrorMessage = (error: unknown, fallback: string): string => {
  const axiosError = error as AxiosError<CartErrorResponse>;

  if (axiosError.response?.data?.message) {
    return axiosError.response.data.message;
  }

  return fallback;
};

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

// Отримати кошик
export const fetchCart = createAsyncThunk<CartItem[], void, { rejectValue: string }>(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/cart", { withCredentials: true });
      return res.data.items;
    } catch (error: unknown) {
      return rejectWithValue(
        getCartErrorMessage(error, "Помилка при отриманні кошика")
      );
    }
  }
);

// Додати товар в кошик
export const addToCart = createAsyncThunk<CartItem[], { productId: string; quantity: number }, { rejectValue: string }>(
  "cart/addToCart",
  async (product, { rejectWithValue }) => {
    try {
      const res = await axios.post("/cart/add", product, { withCredentials: true });
      return res.data.items;
    } catch (error: unknown) {
      return rejectWithValue(
        getCartErrorMessage(error, "Помилка при додаванні в кошик")
      );
    }
  }
);

// Видалити товар з кошика
export const removeFromCart = createAsyncThunk<CartItem[], string, { rejectValue: string }>(
  "cart/removeFromCart",
  async (productId, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "/cart/remove",
        { productId },
        { withCredentials: true }
      );
      return res.data.items;
    } catch (error: unknown) {
      return rejectWithValue(
        getCartErrorMessage(error, "Помилка при видаленні товару")
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // fetchCart
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Помилка при отриманні кошика";
    });

    // addToCart
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addToCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Помилка при додаванні в кошик";
    });

    // removeFromCart
    builder.addCase(removeFromCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Помилка при видаленні товару";
    });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
