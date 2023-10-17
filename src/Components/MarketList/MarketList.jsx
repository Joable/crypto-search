import styles from './MarketList.module.css';

import { 
    useState,
    useEffect
 } from 'react';

import { createArray } from './createArray';
import MarketElement from '../MarketElement/MarketElement';
import LoadingMarketElement from '../MarketElement/LoadingMarketElement';

export default function MarketList({ allCoins, totalCoins, isLoading}){
    const coinsPerPage = 5;
    const totalPages = createArray(Math.ceil(totalCoins / coinsPerPage));
    const [currentCoins, setCurrentCoins] = useState([]);
    const [pageIndexes, setPageIndexes] = useState({firstElement: 0, lastElement: coinsPerPage});
    const [activeButton, setActiveButton] = useState(0);
    

    /* displays the first array elements when 'allCoins' changes*/
    useEffect(() => {
        handlePageChange(0);
    }, [allCoins]);

    useEffect(() =>{ 
        handlePageChange(0);
    }, [allCoins[0], allCoins[1], allCoins[2]])

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

    const handleLoading = () => {
        const iterator = [...Array(coinsPerPage).keys()];

        if(isLoading){
            return(
                iterator.map(() => <LoadingMarketElement/>)
            );
        }else{
            return(
                currentCoins.map((coin) => <MarketElement coin={coin}/>)
            );
        }
    };

    const hideButtons = () => {
        if(isLoading){
            return <></>
        }else{
            return totalPages.map(
                (num) => <button onClick={() => handlePageChange(num)} className={`${styles.button} ${buttonIsActive(num)}`}> {num + 1} </button>
                )
        };
    }

    return(
        <>
        <div className={styles.marketList}>
            {handleLoading()}
        </div>

        <div className={styles.listButtons}>
            {hideButtons()}
        </div>
        </>
    );
}