import styles from './CoinDisplay.module.css';

export default function CoinDisplay({ coinData }){
    const coin = JSON.parse(coinData)
    const {name, iconUrl, price, change} = coin.data.coin;
 
    const reduceDecimals = (num) => {
        return Number.parseFloat(num).toFixed(2)
    };

    const changeColor = (num) => {
        let color = "red";

        if(Number.parseFloat(num) > 0) color = "green";

        return color;
    };

    return(
        <div className={styles.coin}>

            <div className={styles.coinImage}>
                <img src={iconUrl} alt="Coin" />
            </div>

            <div className={styles.coinText}>

                <div className={styles.coinName}>
                
                    <h3>{name}</h3>

                    <h3 className={changeColor(change)}>{change}%</h3>

                </div>
                 
                <h3>$ {reduceDecimals(price)}</h3>
            
            </div>

        </div>
    );
}