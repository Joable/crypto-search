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
    const totalPages = Math.ceil(totalCoins / coinsPerPage);
    const array = createArray(totalCoins);
    const [currentCoins, setCurrentCoins] = useState([])
    const [currentFirstElement , setCurrentFirstElement] = useState(0);
    const [currentLastElement, setCurrentLastElement] = useState(coinsPerPage);

    useEffect(() =>  navigateArray(3), []);

    const navigateArray = (page) => {
        let coins = [];
        
        setCurrentFirstElement(0 + (coinsPerPage * page));
        setCurrentLastElement(coinsPerPage + (coinsPerPage * page));

        for(let i = currentFirstElement ; i < currentLastElement ; i++){
            coins.push(array[i]);
        }

        setCurrentCoins(coins);
    }

    return(
        <div className={styles.marketList}>
            {console.log(currentCoins)}
            {currentCoins.map((num) => <MarketElement coin={num}/>)}
        </div>
    );
}