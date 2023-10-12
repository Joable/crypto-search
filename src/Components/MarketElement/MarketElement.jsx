import styles from './MarketElement.module.css';

export default function MarketElement({ coin }){
    let coinData = coin;
    
    if(!coin) coinData = {
        name:"",
        iconUrl:"",
        price:"",
        change:"",
        marketCap: ""
    };
    
    const reduceDecimals = (num) => {
        return Number.parseFloat(num).toFixed(2);
    }

    return(
        <div className={styles.marketElement}>

            <div className={styles.coinName}>
                <div className={styles.coinImage}>
                    <img src={coinData.iconUrl} alt={coinData.name} />
                </div>

                <h4>{coinData.name}</h4>
            </div>

            <h4>${reduceDecimals(coinData.price)}</h4>

            <h4>{reduceDecimals(coinData.change)}%</h4>

            <h4>${coinData.marketCap}</h4>

        </div>
    );
}