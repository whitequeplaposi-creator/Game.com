import React from 'react';
import styles from './StickyRibbon.module.css';

export default function StickyRibbon() {
    return (
        <div className={styles.stickyRibbon}>
            <div className={styles.ribbonContent}>
                <span>17% RABATT</span>
            </div>
        </div>
    );
}
