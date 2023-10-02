import styles from './MarketList.module.css';

import { createArray } from './createArray';

export default function MarketList(){
    const array = createArray(10);

    return(
        <div className={styles.marketList}>
        </div>
    );
}