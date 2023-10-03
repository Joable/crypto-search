import styles from './MarketList.module.css';

import { 
    useState,
    useEffect
 } from 'react';

import { createArray } from './createArray';
import MarketElement from '../MarketElement/MarketElement';

export default function MarketList(){
    const [currentCoins, setCurrentCoins] = useState([])
    const coinsPerPage = 5;
    const totalCoins = 10;
    const totalPages = Math.ceil(coinsPerPage / totalCoins);
    const array = createArray(totalCoins);

    useEffect(() => {
        let coins = [];

        for(let i = 0 ; i < coinsPerPage ; i++){
            coins.push(array[i]);
        }

        setCurrentCoins(coins);
    }, []);

    return(
        <div className={styles.marketList}>
            {currentCoins.map((num) => <MarketElement coin={num}/>)}
        </div>
    );
}