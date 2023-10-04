import Reason from '../Reason/Reason';
import styles from './ChooseUs.module.css';

export default function ChooseUs(){
    return(
        <section className={styles.chooseUs}>
            <h2>
                Why Choose Us
            </h2>

            <div className={styles.reasonsWrapper}>
                
                <div className={styles.reasonsRight}>
                    <Reason/>
                    <Reason/>
                    <Reason/>
                </div>

                <div className={styles.reasonsLeft}>
                    <Reason/>
                    <Reason/>
                    <Reason/>
                </div>

            </div>
        </section>
    );
}