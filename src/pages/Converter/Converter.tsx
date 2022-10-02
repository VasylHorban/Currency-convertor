import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { OnChangeValue } from 'react-select';

import styles from './Converter.module.scss'
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { ICurrencySymbols } from '../../store/reducers/types';
import { defaultCurrencies } from '../../const';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import { convertCurrency, fetchCurrencySymbols } from '../../store/reducers/ActionCreators';

const Converter: React.FC = () => {
    const [currentCurrency, setCurrentCurrency] = useState<ICurrencySymbols | null>(defaultCurrencies[0] as ICurrencySymbols)
    const [valueToConvert, setValueToConvert] = useState('')
    const { currencySymbols, baseCurrency, isLoading } = useAppSelector(state => state.currencySymbolReducer)
    const { converted, isConverting } = useAppSelector(state => state.convertCurrencyReducer)
    const dispatch = useAppDispatch()

    const toConvertHelperText = currentCurrency? `Enter the amount in ${currentCurrency?.value}` : 'Select the currency to convert'   
    const resultValue = (converted && baseCurrency)? `${converted.toFixed(3)}` : ''

    const handleChangeValueToConvert = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        if (newValue.match(/^-?\d*\.?\d*$/)) setValueToConvert(newValue)

    }, [setValueToConvert])

    const handleChange = useCallback((
        newValue: OnChangeValue<ICurrencySymbols, false>
    ) => {
        if (newValue) setCurrentCurrency(newValue);
        else setCurrentCurrency(null);
    }, [setCurrentCurrency]);

    const handleConvert = useCallback(() => {
        if (currentCurrency && baseCurrency) {
            // dispatch(convertCurrency({ to: baseCurrency.value, from: currentCurrency.value, amount: valueToConvert }))
        }
    }, [baseCurrency, currentCurrency, valueToConvert, dispatch])

    useEffect(() => {
        // dispatch(fetchCurrencySymbols())
    }, [dispatch])
    return (
        <>
            <CustomSelect selectProps={{onChange: handleChange, isLoading, value: currentCurrency, name: "currencyToConvert", options: currencySymbols}} label="Currency to convert :"/>
            <div className={styles.wrapper}>
                <div>
                    <input disabled={!currentCurrency} type="text" value={valueToConvert} onChange={handleChangeValueToConvert} placeholder={toConvertHelperText}/>
                </div>
                <button onClick={handleConvert} className={`${styles.icon} ${isConverting && styles.active}`}></ button>
                <div>
                    <input  disabled readOnly type="text" placeholder='Result in your base currency' value={resultValue} />
                </div>
            </div>
        </>
    );
};

export default Converter;