import styles from './ChooseUs.module.css';

import { reasons } from './reasons';

import Reason from '../Reason/Reason';

export default function ChooseUs(){
    const placeholder = {
        title: "Title",
        text: "Sed turpis eros, elementum a aliquet tincidunt, tempor non nunc."
    }
    
    return(
        <section id='chooseUs' className={styles.chooseUs}>
            <div className={styles.title}>
                <h2 className='mainTitle'>
                    WHY
                </h2>

                <h2 className={`${styles.space} coloredTitle`}>
                    CHOOSE US
                </h2> 
            </div>


            <div className={styles.reasonsWrapper}>
                
                <div className={styles.reasonsRight}>
                    <Reason reasonContent={reasons[0]}/>
                    <Reason reasonContent={reasons[1]}/>
                    <Reason reasonContent={reasons[2]}/>
                </div>

                <div className={styles.reasonsImage}>
                    <img className='white-filter' src="../../img/ChooseUsImages/MiddleImage.svg" alt="Crypto" />
                </div>

                <div className={styles.reasonsLeft}>
                    <Reason reasonContent={reasons[3]}/>
                    <Reason reasonContent={reasons[4]}/>
                    <Reason reasonContent={reasons[5]}/>
                </div>

            </div>
        </section>
    );
}