export interface ICurrencySymbols {
    value: string;
    label: string
}

export interface ICurrencySymbolsResponse {
    success: boolean
    symbols: Array<Array<string>>
}

export interface IConvertCurrencyPayload {
    to: string
    from: string
    amount: string
}

export interface IConvertCurrencyResponse {
    success: boolean
    date: string
    info: {}
    query: IConvertCurrencyPayload
    result: number
}

export interface LatestCurrenciesResponse {
    base: string
    date: string
    rates: Rate
    success: boolean
    timestamp: number
}

export type Rate = Record<string, number>

export interface IFetchLatestCurrenciesPayload {
    base: string
    symbols: string
}