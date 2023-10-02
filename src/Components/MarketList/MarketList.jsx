import styles from './MarketList.module.css';

import { createArray } from './createArray';
import MarketElement from '../MarketElement/MarketElement';

export default function MarketList(){
    const array = createArray(10);

    return(
        <div className={styles.marketList}>
            {array.map((num) => <MarketElement coin={num}/>)}
        </div>
    );
}