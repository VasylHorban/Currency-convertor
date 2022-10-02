import React, { useCallback } from 'react';
import { OnChangeValue } from 'react-select';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import CustomSelect from '../CustomSelect/CustomSelect';
import { currencySymbolsSlice } from '../../store/reducers/CurrencySymbols';
import { ICurrencySymbols } from '../../store/reducers/types';


const BaseCurrency: React.FC = () => {
    const { currencySymbols, baseCurrency, isLoading } = useAppSelector(state => state.currencySymbolReducer)
    const dispatch = useAppDispatch()
    const { changeBaseCurrency } = currencySymbolsSlice.actions

    const handleChange = useCallback((
        newCurrency: OnChangeValue<ICurrencySymbols, false>
    ) => {
        if (newCurrency && newCurrency !== baseCurrency) dispatch(changeBaseCurrency(newCurrency));
        else dispatch(changeBaseCurrency(null));
    }, [baseCurrency, changeBaseCurrency, dispatch]);

    return (
        <div>
            <CustomSelect selectProps={{ onChange: handleChange, isLoading, value: baseCurrency, name: "currencyToConvert", options: currencySymbols }} label="Your base currency :" />
        </div>
    );
};

export default BaseCurrency;