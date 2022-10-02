import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IConvertCurrencyResponse } from "./types";
import {  convertCurrency } from './ActionCreators';

interface ConvertCurrencyState {
  converted: number | '';
  isConverting: boolean;
  error: string;
}

const initialState: ConvertCurrencyState = {
  converted: '',
  isConverting: false,
  error: "",
};

export const convertCurrencySlice = createSlice({
  name: "currencySymbols",
  initialState,
  reducers: {},
  extraReducers: {
    [convertCurrency.pending.type] : (state) => {
        state.isConverting = true
    },
    [convertCurrency.fulfilled.type] : (state, action: PayloadAction<IConvertCurrencyResponse>) => {
        state.isConverting = false
        state.error = ''
        state.converted = action.payload.result
    },
    [convertCurrency.rejected.type] : (state, action: PayloadAction<string>) => {
        state.isConverting = false
        state.error = action.payload
    }
  }
});

export default convertCurrencySlice.reducer;