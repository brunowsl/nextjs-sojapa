import styles from '../styles/style.module.css';

export function Greybox(props) {
    return (
        <div className={styles.greybox}>
            <div>
                <div>
                    <img src={props.image} alt="sushi" />
                </div>
            </div>
            <div className={styles.boxdescription}>
                <p className={styles.greyboxtitle}>{props.nome}</p>
                <p className={styles.greyboxdescription}>{props.description}</p>
                <p className={styles.greyboxvalue}>R$ {props.value},00</p>
                {props.children}
            </div>
        </div>
    );
}