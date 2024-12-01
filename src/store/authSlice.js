import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthTokenAction, getUserinfoAction } from './api-actions';

// Асинхронный экшен для логина
export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const response = await getAuthTokenAction(username, password);
            if (response.accessToken) {
                localStorage.setItem('token', response.accessToken);
                localStorage.setItem('refreshToken', response.refreshToken);
                return response;
            }
            throw new Error('Invalid credentials');
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Асинхронный экшен для получения информации о пользователе
export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
            const userData = await getUserinfoAction();
            return userData;
        } catch (error) {
            return rejectWithValue('Failed to fetch user info');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        refreshToken: localStorage.getItem('refreshToken') || null,
        user: null,
        error: null,
        loading: false,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.refreshToken = null;
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.refreshToken = action.payload.refreshToken;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
