import styles from './LandingSection.module.css';

import CoinDisplay from '../CoinDisplay/CoinDisplay';

export default function LandingSection(){
    const coin = {
        name: "xD",
        change: "50%",
        value:"30"
    }

    return(
        <section className={styles.landingSection}>
        
            <h2 className='mainTitle'>Title</h2>
            <h2 className='coloredTitle'>Colored Title</h2>

            <div className={styles.coins}>

                <CoinDisplay coinData={coin}/>

                <CoinDisplay coinData={coin}/>

                <CoinDisplay coinData={coin}/>

                <CoinDisplay coinData={coin}/>

            </div>

        </section>
    )
}