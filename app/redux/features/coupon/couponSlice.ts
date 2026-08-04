"use client";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "@/lib/utils/axios";

interface CouponState {
  discount: number;
  loading: boolean;
  error: string | null;
  appliedCode: string | null;
}

const initialState: CouponState = {
  discount: 0,
  loading: false,
  error: null,
  appliedCode: null,
};

// Перевірка купона
export const validateCoupon = createAsyncThunk<
  { discount: number; code: string },
  string,
  { rejectValue: string }
>("coupon/validateCoupon", async (code, { rejectWithValue }) => {
  try {
    const res = await axios.post(
      "/coupons/validate",
      { code },
      { withCredentials: true }
    );

    if (!res.data.valid) {
      return rejectWithValue(res.data.message || "Купон недійсний");
    }

    return {
      discount: Number(res.data.discount || 0),
      code,
    };
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Помилка перевірки купона"
    );
  }
});

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    clearCoupon: (state) => {
      state.discount = 0;
      state.error = null;
      state.appliedCode = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(validateCoupon.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.discount = 0;
    });

    builder.addCase(
      validateCoupon.fulfilled,
      (state, action: PayloadAction<{ discount: number; code: string }>) => {
        state.loading = false;
        state.discount = action.payload.discount;
        state.appliedCode = action.payload.code;
        state.error = null;
      }
    );

    builder.addCase(validateCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Купон недійсний";
      state.discount = 0;
      state.appliedCode = null;
    });
  },
});

export const { clearCoupon } = couponSlice.actions;
export default couponSlice.reducer;
