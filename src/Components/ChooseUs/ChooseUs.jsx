import Reason from '../Reason/Reason';
import styles from './ChooseUs.module.css';

export default function ChooseUs(){
    const placeholder = {
        title: "Title",
        text: "Sed turpis eros, elementum a aliquet tincidunt, tempor non nunc."
    }
    
    return(
        <section id='chooseUs' className={styles.chooseUs}>
            <h2 className={styles.title}>
                Why Choose Us
            </h2>

            <div className={styles.reasonsWrapper}>
                
                <div className={styles.reasonsRight}>
                    <Reason reasonContent={placeholder}/>
                    <Reason reasonContent={placeholder}/>
                    <Reason reasonContent={placeholder}/>
                </div>

                <div className={styles.reasonsImage}>
                    <img src="../../img/happiness.png" alt="happiness" />
                </div>

                <div className={styles.reasonsLeft}>
                    <Reason reasonContent={placeholder}/>
                    <Reason reasonContent={placeholder}/>
                    <Reason reasonContent={placeholder}/>
                </div>

            </div>
        </section>
    );
}