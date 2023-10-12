import styles from './LandingSection.module.css';
import { 
    useEffect,
    useState
} from 'react';

import CoinDisplay from '../CoinDisplay/CoinDisplay';


export default function LandingSection(){
    const [coinsData, setCoinsData] = useState([]);
    const coinsUuid = ["Qwsogvtv82FCd", "razxDUgYGNAdQ", "HIVsRcGKkPFtW", "a91GCGd_u96cF"];
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
            
            for(let i = 0 ; i < coinsUuid.length ; i++){
    
                const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/${coinsUuid[i]}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, options);
                const result = await response.text();
    
                coinsUpdate.push(result);
            }

        }

        fetchCoins().then(() => setCoinsData(coinsUpdate));
    }, []);

    return(
        <section id='landingSection' className={styles.landingSection}>
        
            <h2 className='mainTitle'>Title</h2>
            <h2 className='coloredTitle'>Colored Title</h2>

            <div className={styles.coins}>

                {coinsData.map((coin) => <CoinDisplay coinData={coin}/>)}

            </div>

        </section>
    )
}