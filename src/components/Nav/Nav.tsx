import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Nav.module.scss'
import { path } from '../../const';

const Nav: React.FC = () => {
    const { pathname } = useLocation()
    return (
        <nav>
            <ul>
                <li><Link className={pathname === path.CONVERTER ? styles.active : ''} to={path.CONVERTER}>Converter</Link></li>
                <li><Link className={pathname === path.CURRENCIES ? styles.active : ''} to={path.CURRENCIES}>Currencies</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;