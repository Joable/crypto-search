import styles from './CoinDisplay.module.css';

export default function CoinDisplay({ coinData }){
    const {name, change, value} = coinData
 
    return(
        <div className={styles.coin}>

            <img src="../../img/smiley1.png" alt="Coin" />

            <div >

                <h3>{name} {value}</h3>

                <h3>Value</h3>
            
            </div>

        </div>
    );
}