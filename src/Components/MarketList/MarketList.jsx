import styles from './MarketList.module.css';

import { createArray } from './createArray';
import MarketElement from '../MarketElement/MarketElement';

export default function MarketList(){
    const coinPerPage = 5;
    const totalCoins = 10;
    const totalPages = Math.ceil(coinPerPage / totalCoins);
    const array = createArray(totalCoins);

    return(
        <div className={styles.marketList}>
            {array.map((num) => <MarketElement coin={num}/>)}
        </div>
    );
}