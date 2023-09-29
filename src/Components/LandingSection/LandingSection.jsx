import styles from './LandingSection.module.css';

import CoinDisplay from '../CoinDisplay/CoinDisplay';

export default function LandingSection(){
    const coin = {
        name: "xD",
        change: "50",
        value:"30"
    }

    return(
        <>
        <h2>Title</h2>
        <h2>Colored Title</h2>

        <div className={styles.coins}>

            <CoinDisplay coinData={coin}/>

            <CoinDisplay coinData={coin}/>

            <CoinDisplay coinData={coin}/>

            <CoinDisplay coinData={coin}/>

        </div>
        </>
    )
}