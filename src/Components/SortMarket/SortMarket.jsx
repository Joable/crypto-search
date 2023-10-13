import styles from './SortMarket.module.css';

export default function SortMarket(){
    return(
        <>
        <div className={styles.divisions}>

            <h3>Coin</h3>

            <h3>Price</h3>

            <h3>24h change</h3>

            <h3>Market Cap</h3>

        </div>
        </>
    );
}