import styles from './Division.module.css';

import { useEffect, useState } from 'react';

export default function Division({title, order, activeButton, setActiveButton}) {
    const [arrowType, setArrowType] = useState(1);
    const [arrow, setArrow] = useState(<></>);
    
    useEffect( () => {
        if(activeButton === title){
            (arrowType !== 0) ? setArrow(<img src='../../img/Descendant.svg'/>) : setArrow(<img src='../../img/Ascendant.svg'/>);
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

        console.log(arrowType)
    };

    return(
        <>
        <button onClick={handleClick}>
            <h3>{title}</h3>

        </button>
        
        {arrow}
        {console.log(arrow)}
        </>
    );
}