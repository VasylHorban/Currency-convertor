import { combineReducers, configureStore } from "@reduxjs/toolkit";

import currencySymbolReducer from "./reducers/CurrencySymbols";
import convertCurrencyReducer from "./reducers/Convert";
import latestCurrenciesReducer from "./reducers/LatestCurrencies";

const rootReducer = combineReducers({
  currencySymbolReducer,
  convertCurrencyReducer,
  latestCurrenciesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type RootStore = ReturnType<typeof setupStore>;
export type AppDispatch = RootStore["dispatch"];
