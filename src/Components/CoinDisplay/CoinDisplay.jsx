import { useEffect } from 'react';
import styles from './CoinDisplay.module.css';

export default function CoinDisplay({ coinData }){
    const coin = JSON.parse(coinData)
    const {name, iconUrl, price, change} = coin.data.coin;
 
    return(
        <div className={styles.coin}>
            {console.log(JSON.parse(coinData))}

            <div className={styles.coinImage}>
                <img src={iconUrl} alt="Coin" />
            </div>

            <div className={styles.coinText}>

                <h3>{name} {change}</h3>

                <h3>{price}</h3>
            
            </div>

        </div>
    );
}