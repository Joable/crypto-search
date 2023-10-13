import styles from './SortMarket.module.css';

export default function SortMarket({allCoins , changeAllCoins}){

    const compareFn = (a, b) => {
        if(a.name < b.name){
            return -1;
        }else if(a.name > b.name){
            return 1;
        };

        return 0;
    };

    const orderAlphabetically = () => {
        const newOrder = allCoins.sort(compareFn); 

        changeAllCoins(newOrder);
    };

    return(
        <>
        <div className={styles.divisions}>

            
            <button onClick={orderAlphabetically}>
                <h3>Coin</h3>
            </button>

            <h3>Price</h3>

            <h3>24h change</h3>

            <h3>Market Cap</h3>

        </div>
        </>
    );
}