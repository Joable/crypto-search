import styles from './MarketList.module.css';

import { 
    useState,
    useEffect
 } from 'react';

import { createArray } from './createArray';
import MarketElement from '../MarketElement/MarketElement';

export default function MarketList({ allCoins, totalCoins }){
    const coinsPerPage = 5;
    const totalPages = createArray(Math.ceil(totalCoins / coinsPerPage));
    const [currentCoins, setCurrentCoins] = useState([]);
    const [pageIndexes, setPageIndexes] = useState({firstElement: 0, lastElement: coinsPerPage});
    const [activeButton, setActiveButton] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    /* displays the first array elements at first mount */
    useEffect(() => handlePageChange(0), []);

    /* changes the displayed elements when the page indexes changes*/
    useEffect(() => {
        let coins = [];

        for(let i = pageIndexes.firstElement ; i < pageIndexes.lastElement ; i++){
                coins.push(allCoins[i]);
            }
    
            setCurrentCoins(coins);
    }, [pageIndexes]);

    const handlePageChange = (page) => {
        setPageIndexes({firstElement: coinsPerPage * page, lastElement: coinsPerPage * (page + 1 )});
    
        setActiveButton(page);
    };

    const buttonIsActive = (num) => {
        let buttonClass = styles.inactiveButton;

        if (activeButton == num) buttonClass = styles.activeButton;

        return buttonClass;
    };

    if(isLoading){
        return(
            <>
            loading ¬w¬
            </>
        );

    }else{
        return(
            <>
            <div className={styles.marketList}>
                {currentCoins.map((coin) => <MarketElement coin={coin}/>)}
            </div>

            <div className={styles.listButtons}>
                {totalPages.map((num) => <button onClick={() => handlePageChange(num)} className={buttonIsActive(num)}> {num + 1} </button>)}
            </div>
            </>
        );
    }
}