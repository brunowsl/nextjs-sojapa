import styles from '../styles/style.module.css';

export function Flag(props) {
    return (
        <div className={styles.flag}>
            <img src={props.image} alt="flag" />
            <h4 style={{ marginLeft: "4px" }}>{props.nome}</h4>
        </div>
    );
}