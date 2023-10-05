import styles from './Reason.module.css';

export default function Reason({ reasonContent }){
    const {title, text} = reasonContent

    return(
        <div className={styles.reason}>
            
            <div className={styles.image}>
                <img src="../../img/smiley2.png" alt="smiley"/>
            </div>

            <div className={styles.reasonText}>
                <h3>{title}</h3>

                <p>
                    {text}
                </p>
            </div>

        </div>
    )
}