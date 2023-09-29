import styles from './NavBar.module.css';

export default function NavBar(){
    return(
        <div className={styles.navBar}>

            <div className={styles.navWrapper}>

                <a href="#">Logo</a>

                <div className={styles.navButtons}>

                    <button>Home</button>
                    <button>Market</button>
                    <button>Choose Us</button>
                    <button>Join</button>

                </div>

                <div className={styles.navSocial}>

                    <a href="#">Twitter</a>
                    <a href="#">Discord</a>
                
                </div>

            </div>
        
        </div>
    );
}