import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/utils/axios";

export interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  isNewProduct: boolean;
  promotion: boolean;
  [key: string]: unknown;
}

interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  catalogLoading: boolean;
  error: string | null;
  totalPages: number;
  currentOffset: number;
  totalProducts: number;
  watchedProducts: Product[];
  watchedLoading: boolean;
  watchedError: string | null;
  interestedProducts: Product[];
  interestedLoading: boolean;
  interestedError: string | null;
}

const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
  loading: false,
  catalogLoading: false,
  error: null,
  totalPages: 1,
  currentOffset: 0,
  totalProducts: 0,
  watchedProducts: [],
  watchedLoading: false,
  watchedError: null,
  interestedProducts: [],
  interestedLoading: false,
  interestedError: null,
};

// Замість існуючого fetchProducts додайте підтримку пагінації:
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({
    offset = 0,
    limit = 12,
  }: { offset?: number; limit?: number } = {}) => {
    const { data } = await axios.get(
      `/products?offset=${offset}&limit=${limit}`
    );
    return data;
  }
);

// ✅ Категорії
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async ({
    category,
    offset = 0,
    limit = 12,
  }: {
    category: string;
    offset?: number;
    limit?: number;
  }) => {
    const { data } = await axios.get(
      `/products/category/${category}?offset=${offset}&limit=${limit}`
    );
    return data; // { products, totalPages, totalProducts, currentOffset }
  }
);

// ✅ Підкатегорії
export const fetchProductsBySubcategory = createAsyncThunk(
  "products/fetchProductsBySubcategory",
  async ({
    subcategory,
    offset = 0,
    limit = 12,
  }: {
    subcategory: string;
    offset?: number;
    limit?: number;
  }) => {
    const { data } = await axios.get(
      `/products/subcategory/${subcategory}?offset=${offset}&limit=${limit}`
    );
    return data;
  }
);

// ✅ Новинки
export const fetchNewProducts = createAsyncThunk(
  "products/fetchNewProducts",
  async ({ offset = 0, limit = 12 }: { offset?: number; limit?: number }) => {
    const { data } = await axios.get(
      `/products/new-products?offset=${offset}&limit=${limit}`
    );
    return data;
  }
);

// ✅ Акційні товари
export const fetchPromotionalProducts = createAsyncThunk(
  "products/fetchPromotionalProducts",
  async ({ offset = 0, limit = 12 }: { offset?: number; limit?: number }) => {
    const { data } = await axios.get(
      `/products/promotions?offset=${offset}&limit=${limit}`
    );
    return data;
  }
);

// ✅ Хіти продажів (Bestsellers)
export const fetchBestsellerProducts = createAsyncThunk(
  "products/fetchBestsellerProducts",
  async ({ offset = 0, limit = 12 }: { offset?: number; limit?: number } = {}) => {
    const { data } = await axios.get(
      `/products/bestsellers?offset=${offset}&limit=${limit}`
    );
    return data;
  }
);

// ✅ Один товар
export const fetchProductById = createAsyncThunk<Product, string>(
  "products/fetchProductById",
  async (id) => {
    const { data } = await axios.get(`/products/${id}`);
    return data;
  }
);

// ✅ Переглянуті товари
export const fetchWatchedProducts = createAsyncThunk(
  "products/fetchWatchedProducts",
  async (ids: string[]) => {
    const { data } = await axios.post("/products/watched", { ids });
    return data; // масив товарів
  }
);

// ✅ Вам буде цікаво
export const fetchInterestedProducts = createAsyncThunk(
  "products/fetchInterestedProducts",
  async (lastWatchedId: string | null) => {
    const { data } = await axios.post("/products/interested", {
      lastWatchedId,
    });
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ Усі товари
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.totalPages = action.payload.totalPages;
        state.currentOffset = action.payload.currentOffset;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Не вдалося завантажити товари";
      })

      // ✅ Категорії
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.totalPages = action.payload.totalPages;
        state.currentOffset = action.payload.currentOffset;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Не вдалося завантажити товари за категорією";
      })

      // ✅ Підкатегорії
      .addCase(fetchProductsBySubcategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsBySubcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.totalPages = action.payload.totalPages;
        state.currentOffset = action.payload.currentOffset;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(fetchProductsBySubcategory.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ||
          "Не вдалося завантажити товари за підкатегорією";
      })

      // ✅ Новинки
      .addCase(fetchNewProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.totalPages = action.payload.totalPages;
        state.currentOffset = action.payload.currentOffset;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(fetchNewProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Не вдалося завантажити новинки";
      })

      // ✅ Акційні товари
      .addCase(fetchPromotionalProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPromotionalProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.totalPages = action.payload.totalPages;
        state.currentOffset = action.payload.currentOffset;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(fetchPromotionalProducts.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Не вдалося завантажити акційні товари";
      })

      // Хіти продажів (Bestsellers)
      .addCase(fetchBestsellerProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBestsellerProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.totalPages = action.payload.totalPages;
        state.currentOffset = action.payload.currentOffset;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(fetchBestsellerProducts.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Не вдалося завантажити хіти продажів";
      })

      // ✅ Один товар
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Не вдалося завантажити товар";
      })

      // ✅ Переглянуті товари
      .addCase(fetchWatchedProducts.pending, (state) => {
        state.watchedLoading = true;
        state.watchedError = null;
      })
      .addCase(fetchWatchedProducts.fulfilled, (state, action) => {
        state.watchedLoading = false;
        state.watchedProducts = action.payload;
      })
      .addCase(fetchWatchedProducts.rejected, (state, action) => {
        state.watchedLoading = false;
        state.watchedError =
          action.error.message || "Не вдалося завантажити переглянуті товари";
      })

      // ✅ Вам буде цікаво
      .addCase(fetchInterestedProducts.pending, (state) => {
        state.interestedLoading = true;
        state.interestedError = null;
      })
      .addCase(fetchInterestedProducts.fulfilled, (state, action) => {
        state.interestedLoading = false;
        state.interestedProducts = action.payload;
      })
      .addCase(fetchInterestedProducts.rejected, (state, action) => {
        state.interestedLoading = false;
        state.interestedError =
          action.error.message || "Не вдалося завантажити рекомендовані товари";
      });
  },
});

export const { clearSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
