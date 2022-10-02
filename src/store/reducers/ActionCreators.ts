import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  IConvertCurrencyPayload,
  IConvertCurrencyResponse,
  ICurrencySymbolsResponse,
  IFetchLatestCurrenciesPayload,
  LatestCurrenciesResponse,
} from "./types";
import { changeCurrencyResponseData } from "./utils";
import { BASE_URL, APIKey } from "../../const";

export const fetchCurrencySymbols = createAsyncThunk(
  "currencySymbols/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ICurrencySymbolsResponse>(
        `${BASE_URL}/symbols`,
        {
          headers: {
            apikey: APIKey,
          },
        }
      );
      return changeCurrencyResponseData(response.data);
    } catch (e) {
      console.log(e);
    }
  }
);

export const convertCurrency = createAsyncThunk(
  "currency/convert",
  async (payload: IConvertCurrencyPayload, thunkAPI) => {
    try {
      const response = await axios.get<IConvertCurrencyResponse>(
        `${BASE_URL}/convert?to=${payload.to}&from=${payload.from}&amount=${payload.amount}`,
        {
          headers: {
            apikey: APIKey,
          },
        }
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchLatestCurrencies = createAsyncThunk(
  "currency/fetchBySymbols",
  async (payload: IFetchLatestCurrenciesPayload, thunkAPI) => {
    try {
      const response = await axios.get<LatestCurrenciesResponse>(
        `${BASE_URL}/latest?symbols=${payload.symbols}&base=${payload.base}`,
        {
          headers: {
            apikey: APIKey,
          },
        }
      );
      return response.data.rates;
    } catch (e) {
      console.log(e);
    }
  }
);
