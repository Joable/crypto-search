import styles from './CoinDisplay.module.css';

import Spinner from '../Spinner/Spinner';

export default function LoadingCoinDisplay({coin}){
    return(
        <div className={styles.coin}>

            <div className={styles.coinLoading}>
                <Spinner/>
            </div>

            <div className={styles.coinText}>

                <div className={styles.coinName}>
                
                    <h3>{coin.name}</h3>

                    <h3>--.- %</h3>

                </div>
                 
                <h3>$ ----.--</h3>
            
            </div>

        </div>
    );
}