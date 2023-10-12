import styles from './Reason.module.css';

export default function Reason({ reasonContent }){
    const {image, title, text} = reasonContent

    return(
        <div className={styles.reason}>
            
            <div className={styles.image}>
                <img className={styles.filterWhite} src={image} alt="Reason"/>
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