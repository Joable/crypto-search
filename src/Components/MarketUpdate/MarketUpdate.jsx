import styles from './MarketUpdate.module.css';

import MarketList from '../MarketList/MarketList';

export default function MarketUpdate(){
    return(
        <section>
        <h2>Market Update</h2>

        <div className={styles.divisions}>

            <h3>Coin</h3>

            <h3>Price</h3>

            <h3>24h change</h3>

            <h3>Market Cap</h3>

        </div>

        <MarketList/>
        </section>
    );
}