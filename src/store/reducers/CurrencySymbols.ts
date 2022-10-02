import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICurrencySymbols } from "./types";
import { fetchCurrencySymbols } from './ActionCreators';
import { defaultCurrencies } from "../../const";

interface CurrencySymbolsState {
  currencySymbols: ICurrencySymbols[];
  baseCurrency: ICurrencySymbols | null;
  isLoading: boolean;
  error: string;
}

const initialState: CurrencySymbolsState = {
  currencySymbols: [] as ICurrencySymbols[],
  baseCurrency: defaultCurrencies[1],
  isLoading: false,
  error: "",
};

export const currencySymbolsSlice = createSlice({
  name: "currencySymbols",
  initialState,
  reducers: {
    changeBaseCurrency: (state, action: PayloadAction<ICurrencySymbols | null>) => {
        state.baseCurrency = action.payload
    }
  },
  extraReducers: {
    [fetchCurrencySymbols.pending.type] : (state) => {
        state.isLoading = true
    },
    [fetchCurrencySymbols.fulfilled.type] : (state, action: PayloadAction<ICurrencySymbols[]>) => {
        state.isLoading = false
        state.error = ''
        console.log(action.payload)
        state.currencySymbols = action.payload
    },
    [fetchCurrencySymbols.rejected.type] : (state, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
    }
  }
});

export default currencySymbolsSlice.reducer;
