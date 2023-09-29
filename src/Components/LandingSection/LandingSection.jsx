import styles from './LandingSection.module.css';

import CoinDisplay from '../CoinDisplay/CoinDisplay';

export default function LandingSection(){
    const coin = {
        name: "xD",
        change: "50",
        value:"30"
    }

    return(
        <section className={styles.landingSection}>
        
            <h1>Title</h1>
            <h1>Colored Title</h1>

            <div className={styles.coins}>

                <CoinDisplay coinData={coin}/>

                <CoinDisplay coinData={coin}/>

                <CoinDisplay coinData={coin}/>

                <CoinDisplay coinData={coin}/>

            </div>

        </section>
    )
}