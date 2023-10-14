import styles from './Division.module.css';

export default function Division({title, order}) {
    return(
        <button onClick={order}>
            <h3>{title}</h3>
        </button>
    )
}