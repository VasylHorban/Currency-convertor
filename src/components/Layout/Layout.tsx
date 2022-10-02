import React, { ReactNode } from 'react';

import styles from './Layout.module.scss'
import Nav from './../Nav/Nav';

interface Props {
    leftContent: ReactNode
    rightContent: ReactNode
}

const Layout: React.FC<Props> = ({ leftContent, rightContent }) => (
    <div className={styles.container}>
        <Nav />
        <div className={styles.wrapper}>
            <div className={styles.leftCard}>
                <div className={styles.card}>
                    {leftContent}
                </div>
            </div>
            <div className={styles.rightCard}>
                <div className={styles.card}>
                    {rightContent}
                </div>
            </div>
        </div>
    </div>
);

export default Layout;