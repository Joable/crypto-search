import styles from './CoinDisplay.module.css';

export default function CoinDisplay({ coinData }){
    const coin = JSON.parse(coinData)
    const {name, iconUrl, price, change} = coin.data.coin;
 
    const reduceDecimals = (num) => {
        return Number.parseFloat(num).toFixed(2)
    };

    return(
        <div className={styles.coin}>

            <div className={styles.coinImage}>
                <img src={iconUrl} alt="Coin" />
            </div>

            <div className={styles.coinText}>

                <h3>{name} {change}</h3>

                <h3>$ {reduceDecimals(price)}</h3>
            
            </div>

        </div>
    );
}