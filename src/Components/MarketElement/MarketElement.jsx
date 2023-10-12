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
    
    console.log(coinData)

    return(
        <div className={styles.marketElement}>

            <div className={styles.coinName}>
                <div className={styles.coinImage}>
                    <img src={coinData.iconUrl} alt={coinData.name} />
                </div>

                <h4>{coinData.name}</h4>
            </div>

            <h4>{coinData.price}</h4>

            <h4>{coinData.change}</h4>

            <h4>{coinData.marketCap}</h4>

        </div>
    );
}