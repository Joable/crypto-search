import styles from './Division.module.css';

import { useEffect, useState } from 'react';

export default function Division({title, order, activeButton, setActiveButton}) {
    const [arrowType, setArrowType] = useState(1);
    const [arrow, setArrow] = useState(<></>);
    
    useEffect( () => {
        if(activeButton === title){
            (arrowType !== 0) ? setArrow(<img className={styles.arrow} src='../../img/Descendant.svg'/>) : setArrow(<img className={styles.arrow} src='../../img/Ascendant.svg'/>);
        }else{
            setArrow(<></>)
        }
    },[arrowType, activeButton]);

    const changeArrowType = () => {
        (arrowType === 0) ? setArrowType(1) : setArrowType(0);
    };

    const handleClick = () => {
        order();

        setActiveButton(title);

        changeArrowType();
    };

    return(
        <>
            <button className={styles.division} onClick={handleClick}>
                {arrow}
                
                <h3>{title}</h3>
            </button>
            
        </>
    );
}