import styles from './SortMarket.module.css';

import { useState } from 'react';

import { alphabetically, byChange, byPrice, byMarketCap } from './orderFunctions';

import Division from '../Division/Division';

export default function SortMarket({allCoins, changeAllCoins, triggerChange, setTriggerChange}){
    const [activeButton, setActiveButton] = useState("");

    const order = (type) => {
        const newOrder = allCoins.sort(type); 

        changeAllCoins(newOrder);

        setTriggerChange(triggerChange + 1);
    };

    return(
        <>
        <div className={styles.divisions}>

            <div className={styles.firstButton}>
                <Division  title={"Coin"} order={() => order(alphabetically)} activeButton={activeButton} setActiveButton={setActiveButton}/>
            </div>
            
            <div className={styles.divisionButton}>
                <Division title={"Price"} order={() => order(byPrice)} activeButton={activeButton} setActiveButton={setActiveButton}/>
            </div>

            <div className={styles.divisionButton}>
                <Division title={"24hs change"} order={() => order(byChange)} activeButton={activeButton} setActiveButton={setActiveButton}/>
            </div>

            <div className={styles.divisionButton}>
                <Division title={"Market cap"} order={() => order(byMarketCap)} activeButton={activeButton} setActiveButton={setActiveButton}/>
            </div>



        </div>
        </>
    );
}