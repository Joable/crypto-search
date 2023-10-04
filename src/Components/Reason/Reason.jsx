import styles from './Reason.module.css';

export default function Reason(){
    return(
        <div className={styles.reason}>
            
            <div className={styles.image}>
                <img src="../../img/smiley2.png" alt="smiley"/>
            </div>

            <div className={styles.reasonText}>
                <h3>Title</h3>

                <p>
                    Curabitur eget magna sit amet sem vehicula dapibus. 
                    Nullam pulvinar lorem eleifend feugiat scelerisque. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

        </div>
    )
}