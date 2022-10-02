import React, { memo } from 'react';
import Select, { OnChangeValue } from 'react-select';

import styles from './CustomSelect.module.scss'
import { ICurrencySymbols } from '../../store/reducers/types';

interface SelectProps {
    isLoading: boolean
    value: ICurrencySymbols | null
    name: string
    options: ICurrencySymbols[]
    onChange: (newValue: OnChangeValue<ICurrencySymbols, false>) => void
}

interface Props {
    selectProps: SelectProps
    label: string
}

const CustomSelect: React.FC<Props> = ({selectProps, label}) => {
    return (
        <div>
            <label className={styles.label}>
                {label}
            </label>
            <Select {...selectProps} isClearable isSearchable classNamePrefix='custom-select' />
        </div>
    );
};

export default memo(CustomSelect);