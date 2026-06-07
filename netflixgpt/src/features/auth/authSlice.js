import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailed, logout } = authSlice.actions;

export const login = ({ email, password }) => async (dispatch) => {
  dispatch(loginRequest());
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    dispatch(loginFailed('Enter a valid email address.'));
    return;
  }
  if (password.length < 6) {
    dispatch(loginFailed('Password must be at least 6 characters.'));
    return;
  }

  const user = {
    name: email.split('@')[0],
    email,
    plan: 'Premium',
    joined: new Date().toLocaleDateString(),
  };

  setTimeout(() => dispatch(loginSuccess(user)), 300);
};

export const register = ({ name, email, password }) => async (dispatch) => {
  dispatch(loginRequest());
  if (!name.trim()) {
    dispatch(loginFailed('Please enter a display name.'));
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    dispatch(loginFailed('Enter a valid email address.'));
    return;
  }
  if (password.length < 6) {
    dispatch(loginFailed('Password must be at least 6 characters.'));
    return;
  }

  const user = {
    name,
    email,
    plan: 'Premium',
    joined: new Date().toLocaleDateString(),
  };

  setTimeout(() => dispatch(loginSuccess(user)), 300);
};

export default authSlice.reducer;
