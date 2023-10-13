import styles from './MarketUpdate.module.css';

import MarketList from '../MarketList/MarketList';
import SortMarket from '../SortMarket/SortMarket';

export default function MarketUpdate(){
    return(
        <section id='marketUpdate' className={styles.marketUpdate}>
            <h2>Market Update</h2>

            <SortMarket/>

            <MarketList/>
        </section>
    );
}