import styles from './JoinUs.module.css';

export default function JoinUs(){
    return(
        <section>
            <h2>
                JOIN US VIA
            </h2>
            <h2>
                DISCORD
            </h2>

            <p>Invest and manage all your crypto in one place</p>

            <button>Join via Discord</button>

            <div className={styles.social}>
                
                <a href="#">Twitter</a>
                
                <a href="#">Discord</a>
                
                <a href="#">Facebook</a>
                
                <a href="#">Youtube</a>

            </div>
        </section>
    )
}