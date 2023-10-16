import styles from './MarketElement.module.css';

export default function LoadingMarketElement(){
    return(
        <>
        <div className={styles.marketElement}>

            <div className={styles.coinName}>
                <h4>Loading...</h4>
            </div>

            <h4>$ ----.--</h4>

            <h4>-.-- %</h4>

            <h4>$ ---------</h4>

        </div>
        </>
    );
}