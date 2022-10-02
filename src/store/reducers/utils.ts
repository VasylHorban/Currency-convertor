import { ICurrencySymbolsResponse } from "./types";

export const changeCurrencyResponseData = (data: ICurrencySymbolsResponse) => {
  return Object.entries(data.symbols).map((elem) => ({
    value: elem[0],
    label: `${elem[0]} - ${elem[1]}`,
  }));
};
