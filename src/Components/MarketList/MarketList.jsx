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
    const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${totalCoins}&offset=0`;
    const options = {
	    method: 'GET',
	    headers: {
            'X-RapidAPI-Key': 'ce25898df1msheb0f33f8531834ap1d5480jsnd7ffc1659004',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	    }
    };
    const array = createArray(totalCoins);
    const [allCoins, setAllCoins] = useState([]);
    const [currentCoins, setCurrentCoins] = useState([]);
    const [pageIndexes, setPageIndexes] = useState({firstElement: 0, lastElement: coinsPerPage});
    const [activeButton, setActiveButton] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    /* displays the first array elements at first mount */
    useEffect(() => {
        const fetchCoins = async () =>{
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                const resultObject = JSON.parse(result);

                setAllCoins(resultObject.data.coins);    
                
                handlePageChange(0);

                setIsLoading(false);

            } catch (error) {
                console.error(error);
            }
        };

        fetchCoins();

        
    }, []);

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