import styles from './LandingSection.module.css';
import { 
    Suspense,
    useEffect,
    useState
} from 'react';

import { coins } from './coins';

import CoinDisplay from '../CoinDisplay/CoinDisplay';
import LoadingCoinDisplay from '../CoinDisplay/LoadingCoinDisplay';


export default function LandingSection(){
    const [coinsData, setCoinsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ce25898df1msheb0f33f8531834ap1d5480jsnd7ffc1659004',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    useEffect(() => {         
        
        let coinsUpdate = []

        const fetchCoins = async () => {
            
            for(let i = 0 ; i < coins.length ; i++){
    
                const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/${coins[i].uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, options);
                const result = await response.text();
    
                coinsUpdate.push(result);
            }

        }

        fetchCoins().then(() => setCoinsData(coinsUpdate));

        //setIsLoading(false);
    }, []);

    const handleLoading = () => {
        if(isLoading){
            return(
                <LoadingCoinDisplay/>
                )
        }else{
            return(
                coinsData.map((coin) => <CoinDisplay coinData={coin}/>)
            )
        }
    }

    return(
        <section id='landingSection' className={styles.landingSection}>
        
            <h2 className='mainTitle'>Title</h2>
            <h2 className='coloredTitle'>Colored Title</h2>

            <div className={styles.coins}>

                {handleLoading()}

            </div>

        </section>
    )
}