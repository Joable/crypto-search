import styles from './SortMarket.module.css';

export default function SortMarket({allCoins , changeAllCoins}){

    const alpha = (a, b) => {
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

    const orderAlphabetically = () => {
        const newOrder = allCoins.sort(alpha); 

        changeAllCoins(newOrder);

        console.log(allCoins)
    };

    const orderByPrice = () => {
        const newOrder = allCoins.sort(byPrice);

        changeAllCoins(newOrder);

        console.log(allCoins)
    }

    return(
        <>
        <div className={styles.divisions}>

            
            <button onClick={orderAlphabetically}>
                <h3>Coin</h3>
            </button>

            <button onClick={orderByPrice}>
                <h3>Price</h3>
            </button>

            <h3>24h change</h3>

            <h3>Market Cap</h3>

        </div>
        </>
    );
}