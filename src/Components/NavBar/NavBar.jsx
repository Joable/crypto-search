import styles from './NavBar.module.css';

import { useEffect, useState } from 'react';

export default function NavBar(){
    const [landingSection, setLandingSection] = useState("");
    const [marketUpdate, setMarketUpdate] = useState("");
    const [chooseUs, setChooseUs] = useState("");
    const [joinUs, setJoinUs] = useState("");

    useEffect(() => {
        setLandingSection(document.getElementById('landingSection'));
        setMarketUpdate(document.getElementById('marketUpdate'));
        setChooseUs(document.getElementById('chooseUs'));
        setJoinUs(document.getElementById('joinUs'));
    }, []);

    const handleScroll = (element) => {
        const elementTop = element.getBoundingClientRect().top;
        const bodyTop = document.body.getBoundingClientRect().top;    
    
        document.documentElement.scrollTop = elementTop - bodyTop;
    };

    return(
        <div className={styles.navBar}>

            <div className={styles.navWrapper}>

                <a className={styles.navLogo} href="#">
                    <img className='white-filter' src="img/Logo.svg" alt="Crypto-search" />
                </a>

                <div className={styles.navButtons}>

                    <button onClick={() => handleScroll(landingSection)}>Home</button>
                    <button onClick={() => handleScroll(marketUpdate)}>Market</button>
                    <button onClick={() => handleScroll(chooseUs)}>Choose Us</button>
                    <button onClick={() => handleScroll(joinUs)}>Join</button>

                </div>

                <div className={styles.navSocial}>

                    <a className={`${styles.socialIcon} white-filter`} href="#">
                        <img src='img/Twitter.svg' alt='Twitter'/>
                    </a>

                    <a className={`${styles.socialIcon} white-filter`} href="#">
                        <img src="img/Discord.svg" alt="Discord"/>
                    </a>
                
                </div>

            </div>
        
        </div>
    );
}