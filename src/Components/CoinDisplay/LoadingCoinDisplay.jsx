import styles from './CoinDisplay.module.css';

export default function LoadingCoinDisplay(){
    return(
        <div className={styles.coin}>

            <div className={styles.coinImage}>
                <img src="" alt="Coin" />
            </div>

            <div className={styles.coinText}>

                <div className={styles.coinName}>
                
                    <h3>{name}</h3>

                    <h3>--.- %</h3>

                </div>
                 
                <h3>$ ----.--</h3>
            
            </div>

        </div>
    );
}