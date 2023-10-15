import styles from './SortMarket.module.css';

import { useState } from 'react';

import { 
    alphabeticallyDesc, 
    byChangeDesc, 
    byPriceDesc, 
    byMarketCapDesc, 
    alphabeticallyAsc, 
    byChangeAsc, 
    byPriceAsc, 
    byMarketCapAsc 
} from './orderFunctions';

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
                <Division 
                title={"Coin"} 
                descendant={() => order(alphabeticallyDesc)} 
                ascendant={() => order(alphabeticallyAsc)}
                activeButton={activeButton} 
                setActiveButton={setActiveButton}
                />
            </div>
            
            <div className={styles.divisionButton}>
                <Division title={"Price"}
                 descendant={() => order(byPriceDesc)}
                 ascendant={() => order(byPriceAsc)}
                 activeButton={activeButton}
                 setActiveButton={setActiveButton}
                />
            </div>

            <div className={styles.divisionButton}>
                <Division title={"24hs change"}
                 descendant={() => order(byChangeDesc)}
                 ascendant={() => order(byChangeAsc)}
                 activeButton={activeButton}
                 setActiveButton={setActiveButton}
                />
            </div>

            <div className={styles.divisionButton}>
                <Division title={"Market cap"}
                 descendant={() => order(byMarketCapDesc)}
                 ascendant={() => order(byMarketCapAsc)}
                 activeButton={activeButton}
                 setActiveButton={setActiveButton}
                />
            </div>



        </div>
        </>
    );
}