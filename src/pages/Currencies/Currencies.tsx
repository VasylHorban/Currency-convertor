import React, { useEffect } from 'react';

import styles from './Currencies.module.scss'
import { defaultCurrenciesCode } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Loading from './../../components/Loading/Loading';
import { fetchLatestCurrencies } from '../../store/reducers/ActionCreators';

const Currencies: React.FC = () => {
    const dispatch = useAppDispatch()
    const { baseCurrency } = useAppSelector(state => state.currencySymbolReducer)
    const { rates, isLoading } = useAppSelector(state => state.latestCurrenciesReducer)
    let currenciesCode = defaultCurrenciesCode

    function getDefaultCurrenciesCode (base: string, defaultCodes: Array<string>) {
        return defaultCodes.includes(base) ? defaultCodes.filter(code => code !== base) : defaultCodes.slice(0, -1)
    }

    if (baseCurrency) currenciesCode = getDefaultCurrenciesCode(baseCurrency.value, defaultCurrenciesCode)

    useEffect(() => {
        if (baseCurrency) {
            const symbols = currenciesCode.join(',')
            dispatch(fetchLatestCurrencies({ base: baseCurrency?.value, symbols }))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [baseCurrency, dispatch])

    if (isLoading) return (<div className={styles.loadingWrapper}><Loading /></div>)
    return (
        <div>
            {(!rates || !baseCurrency) ? (<h2 className={styles.title}>Please, choose your base currency!</h2>) : (
                <>
                    <h2 className={styles.title}>List of currencies : </h2>
                    <ol>
                        {rates && currenciesCode.map(code => <li key={code} className={styles.item}><span className={styles.itemCode}>{`100 ${code}`}</span><span>{`${(100 / rates[code]).toFixed(2)} ${baseCurrency?.value}`}</span></li>)}
                    </ol>
                </>
            )}
        </div>
    );
};

export default Currencies;