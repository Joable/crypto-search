import styles from './JoinUs.module.css';

export default function JoinUs(){
    return(
        <section className={styles.joinUs}>

            <h2 className='mainTitle'>
                JOIN US VIA
            </h2>
            <h2 className='coloredTitle'>
                DISCORD
            </h2>

            <p>Invest and manage all your crypto in one place</p>

            <button className={styles.joinDiscord}>Join via Discord</button>

            <div className={styles.social}>

                <a href="#" className={styles.filter}><img src="../../img/Twitter.svg" alt="Twitter"/></a>
                
                <a href="#" className={styles.filter}><img src="../../img/Discord.svg" alt="Discord"/></a>
                
                <a href="#" className={styles.filter}><img src="../../img/Facebook.svg" alt="Facebook"/></a>
                
                <a href="#" className={styles.filter}><img src="../../img/Youtube.svg" alt="Youtube"/></a>

            </div>

        </section>
    )
}