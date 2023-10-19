import styles from './MarketUpdate.module.css';

import { 
    useState,
    useEffect
 } from 'react';

import MarketList from '../MarketList/MarketList';
import SortMarket from '../SortMarket/SortMarket';

export default function MarketUpdate(){
    const totalCoins = 20;
    const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${totalCoins}&offset=0`;
    const options = {
        method: 'GET',
	    headers: {
            'X-RapidAPI-Key': 'ce25898df1msheb0f33f8531834ap1d5480jsnd7ffc1659004',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	    }
    };
    const [allCoins, setAllCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [triggerChange, setTriggerChange] = useState(0);

    useEffect(() => {
        const fetchCoins = async () =>{
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                const resultObject = JSON.parse(result);

                setAllCoins(resultObject.data.coins);

                setIsLoading(false);

            } catch (error) {
                console.error(error);
            }
        };

        fetchCoins();
        
    }, []);

    

    return(
        <section id='marketUpdate' className={styles.marketUpdate}>

            <div className={styles.marketTitle}>
                <h2>Market Update</h2>
            </div>

            <SortMarket allCoins={allCoins} changeAllCoins={setAllCoins} triggerChange={triggerChange} setTriggerChange={setTriggerChange}/>

            <MarketList allCoins={allCoins} totalCoins={totalCoins} isLoading={isLoading}/>
        </section>
    );
}