import styles from './Division.module.css';

import { useEffect, useState } from 'react';

export default function Division({title, ascendant, descendant, activeButton, setActiveButton}) {
    const [arrowType, setArrowType] = useState(1);
    const [arrow, setArrow] = useState(<></>);
    

    /* change the arrow image and call the function that changes the order*/
    useEffect( () => {
        if(activeButton === title){

            if(arrowType !== 0){
                setArrow(<img className={styles.arrow} src='img/Ascendant.svg'/>)
                
                ascendant();
            }else{
                setArrow(<img className={styles.arrow} src='img/Descendant.svg'/>);

                descendant();
            };

        }else{
            setArrow(<></>)

            setArrowType(1);
        };
    },[arrowType, activeButton]);

    const changeArrowType = () => {
        (arrowType === 0) ? setArrowType(1) : setArrowType(0);
    };

    const handleClick = () => {
        setActiveButton(title);
        
        changeArrowType();
    };

    const classNameSelect = () =>{
        let select = styles.division;

        if(title === "Coin") select = styles.coinCase;

        return select;
    };

    return(
        <>
            <button className={classNameSelect()} onClick={handleClick}>
                    {arrow}
                    
                    <h3>{title}</h3>
            </button>
            
        </>
    );
}