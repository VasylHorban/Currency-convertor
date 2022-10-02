import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchLatestCurrencies } from './ActionCreators';

interface LatestCurrenciesState {
  rates: Record<string, number> | null;
  isLoading: boolean;
  error: string;
}

const initialState: LatestCurrenciesState = {
  rates: null,
  isLoading: false,
  error: "",
};

export const latestCurrenciesSlice = createSlice({
  name: "latestCurrencies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLatestCurrencies.pending.type] : (state) => {
        state.isLoading = true
    },
    [fetchLatestCurrencies.fulfilled.type] : (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = ''
        console.log(action.payload)
        state.rates = action.payload
    },
    [fetchLatestCurrencies.rejected.type] : (state, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
    }
  }
});

export default latestCurrenciesSlice.reducer;
