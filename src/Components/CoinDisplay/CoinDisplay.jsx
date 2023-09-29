import styles from './CoinDisplay.module.css';

export default function CoinDisplay({ coinData }){
    const {name, change, value} = coinData
 
    return(
        <div className={styles.coin}>

            <img src="../../img/smiley1.png" alt="Coin" />

            <div className={styles.coinText}>

                <h3>{name} {change}</h3>

                <h3>{value}</h3>
            
            </div>

        </div>
    );
}