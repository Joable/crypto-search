import styles from './MarketUpdate.module.css';

export default function MarketUpdate(){
    return(
        <>
        <h2>Market Update</h2>

        <div className={styles.divitions}>

            <h3>Coin</h3>

            <h3>Price</h3>

            <h3>24h change</h3>

            <h3>Market Cap</h3>

        </div>
        </>
    );
}