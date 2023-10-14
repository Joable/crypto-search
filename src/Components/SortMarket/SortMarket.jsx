import styles from './SortMarket.module.css';

export default function SortMarket({allCoins, changeAllCoins, triggerChange, setTriggerChange}){

    const alphabetically = (a, b) => {
        if(a.name < b.name){
            return -1;
        }else if(a.name > b.name){
            return 1;
        };

        return 0;
    };

    const byPrice = (a, b) => {
        return Number.parseFloat(b.price) - Number.parseFloat(a.price);
    };

    const byChange = (a, b) => {
        return  Number.parseFloat(b.change) - Number.parseFloat(a.change);
    }

    const byMarketCap = (a, b) => {
        return Number.parseFloat(b.marketCap) - Number.parseFloat(a.marketCap);
    }

    const order = (type) => {
        const newOrder = allCoins.sort(type); 

        changeAllCoins(newOrder);

        setTriggerChange(triggerChange + 1);
    };

    return(
        <>
        <div className={styles.divisions}>

            
            <button onClick={() => order(alphabetically)} className={styles.firstButton}>
                <h3>Coin</h3>
            </button>

            <button onClick={() => order(byPrice)}>
                <h3>Price</h3>
            </button>

            <button onClick={() => order(byChange)}>
                <h3>24hs change</h3>
            </button>

            <button onClick={() => order(byMarketCap)}>
                <h3>Market cap</h3>
            </button>

        </div>
        </>
    );
}