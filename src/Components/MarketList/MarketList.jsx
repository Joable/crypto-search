import styles from './MarketList.module.css';

import { 
    useState,
    useEffect
 } from 'react';

import { createArray } from './createArray';
import MarketElement from '../MarketElement/MarketElement';

export default function MarketList(){
    const coinsPerPage = 5;
    const totalCoins = 20;
    const totalPages = createArray(Math.ceil(totalCoins / coinsPerPage));
    const array = createArray(totalCoins);
    const [currentCoins, setCurrentCoins] = useState([])
    const [pageIndexes, setPageIndexes] = useState({firstElement: 0, lastElement: coinsPerPage})

    useEffect(() =>  displayCoins(0), []);

    useEffect(() => {
        let coins = [];

        for(let i = pageIndexes.firstElement ; i < pageIndexes.lastElement ; i++){
                coins.push(array[i]);
            }
    
            setCurrentCoins(coins);
    }, [pageIndexes]);

    const displayCoins = (page) => setPageIndexes({firstElement: coinsPerPage * page, lastElement: coinsPerPage * (page + 1 )});

    return(
        <div className={styles.marketList}>

            {currentCoins.map((num) => <MarketElement coin={num}/>)}

            {totalPages.map((num) => <button onClick={() => displayCoins(num)}> {num} </button>)}
        </div>
    );
}