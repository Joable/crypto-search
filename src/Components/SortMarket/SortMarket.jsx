import styles from './SortMarket.module.css';

import { useState } from 'react';

import Division from '../Division/Division';

export default function SortMarket({allCoins, changeAllCoins, triggerChange, setTriggerChange}){
    const [activeButton, setActiveButton] = useState("");

    const alphabetically = (a, b) => {
        if(a.name < b.name){
            return -1;
        }else if(a.name > b.name){
            return 1;
        };

        return 0;
    };

    const byPrice = (a, b) => {
        return Number.parseFloat(b.price) - Number.parseFloat(a.price);
    };

    const byChange = (a, b) => {
        return  Number.parseFloat(b.change) - Number.parseFloat(a.change);
    }

    const byMarketCap = (a, b) => {
        return Number.parseFloat(b.marketCap) - Number.parseFloat(a.marketCap);
    }

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
            
            <Division title={"Price"} order={() => order(byPrice)} activeButton={activeButton} setActiveButton={setActiveButton}/>

            <Division title={"24hs change"} order={() => order(byChange)} activeButton={activeButton} setActiveButton={setActiveButton}/>

            <Division title={"Market cap"} order={() => order(byMarketCap)} activeButton={activeButton} setActiveButton={setActiveButton}/>

        </div>
        </>
    );
}