import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../lib/utils/axios";
import { AxiosError } from "axios";

interface CartItem {
  productId: string; // або mongoose.Types.ObjectId, якщо використовуєш напряму
  quantity: number;
  _id: string; // теж ObjectId
}

// Типи
interface User {
  id: string;
  username?: string;
  surname?: string;
  email?: string;
  phone?: string;
  address?: string;
  country?: string;
  city?: string;
  avatar?: string;
  cart?: CartItem[];
  // додай інші поля при потребі
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  status: string | null;
}

interface AuthResponse {
  user: User;
  token: string;
  message: string;
}

interface AuthCredentials {
  username?: string;
  surname?: string;
  email?: string;
  phone?: string;
  password?: string;
  repeatPassword?: string;
  address?: string;
  country?: string;
  city?: string;
}

// Початковий стан
const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
};

// Thunk — РЕЄСТРАЦІЯ
export const registerUser = createAsyncThunk<
  AuthResponse,
  AuthCredentials,
  { rejectValue: { message: string } }
>(
  "auth/registerUser",
  async (
    { username, surname, email, phone, password, repeatPassword },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.post<AuthResponse>("/auth/register", {
        username,
        surname,
        email,
        phone,
        password,
        repeatPassword,
      });
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      return data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(
        error.response?.data || { message: "Помилка реєстрації" }
      );
    }
  }
);

// Thunk — ЛОГІН
export const loginUser = createAsyncThunk<
  AuthResponse,
  AuthCredentials,
  { rejectValue: { message: string } }
>("auth/loginUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<AuthResponse>("/auth/login", {
      email,
      password,
    });
    if (data.token) {
      window.localStorage.setItem("token", data.token);
    }
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(
      error.response?.data || { message: "Помилка входу" }
    );
  }
});

// Thunk — Перевірка авторизації
export const getMe = createAsyncThunk<
  AuthResponse,
  void,
  { rejectValue: { message: string } }
>("auth/getMe", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<AuthResponse>("/auth/me");
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(
      error.response?.data || { message: "Неавторизовано" }
    );
  }
});

// Thunk — профіль користувача
export const profileUser = createAsyncThunk<
  AuthResponse,
  AuthCredentials,
  { rejectValue: { message: string } }
>(
  "auth/profileUser",
  async (
    { username, surname, email, phone, address, country, city },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.put<AuthResponse>("/auth/profile", {
        username,
        surname,
        email,
        phone,
        address,
        country,
        city,
      });
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      return data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(
        error.response?.data || { message: "Помилка входу" }
      );
    }
  }
);

// Thunk — зміна паролю
export const changePassword = createAsyncThunk<
  { message: string },
  { password: string; newPassword: string; repeatNewPassword: string },
  { rejectValue: { message: string } }
>(
  "auth/changePassword",
  async ({ password, newPassword, repeatNewPassword }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put<{ message: string }>(
        "/auth/change-password",
        {
          password,
          newPassword,
          repeatNewPassword,
        }
      );
      return data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(
        error.response?.data || { message: "Помилка зміни паролю" }
      );
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.status = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message || "Помилка реєстрації";
    });

    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message || "Помилка входу";
    });

    // GetMe
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = null;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message || "Неавторизовано";
    });

    // Profile User
    builder.addCase(profileUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(profileUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(profileUser.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message || "Помилка обновлення профілю";
    });

    // Change Password
    builder.addCase(changePassword.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });
    builder.addCase(changePassword.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message || "Помилка зміни паролю";
    });
  },
});

// Selectors та експорт
export const checkIsAuth = (state: { auth: AuthState }) =>
  Boolean(state.auth.token);
export const { logout } = authSlice.actions;
export default authSlice.reducer;
