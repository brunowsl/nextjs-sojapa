import { useRouter } from 'next/router';
import { useState } from 'react';
import { Flag } from '../components/Flag';
import { Greybox } from '../components/Greybox';
import styles from '../styles/style.module.css';
import { Sushi } from '../types/Sushi';

export default function Main({ sushis }) {

    const router = useRouter();

    const [total, addTotal] = useState(0);

    function addValue(sushi: Sushi) {
        addTotal(total + sushi.price);
    }

    function toCart() {
        router.push('/cart');
    }

    return (
        <div className={styles.main}>
            <div className={styles.redbox}>
            </div>
            <div className={styles.inputwrapper} placeholder="Search">
                <span className="mdi mdi-magnify icon" style={{ fontSize: "30px", marginTop: "8px" }}></span>
                <input className={styles.input} type="text" placeholder="Search" />
            </div>
            <div className={styles.row}>
                <Flag nome="sashimi" image="./images/sushis/sushi_small1.png" />
                <Flag nome="temaki" image="./images/sushis/temaki_small1.png" />
                <Flag nome="sushi" image="./images/sushis/sushi_small2.png" />
            </div>
            {sushis.map((sushi: Sushi) => (
                <div className={styles.row} key={sushi.id}>
                    <Greybox
                        key={sushi.id}
                        nome={sushi.name}
                        description={sushi.description}
                        value={sushi.price}
                        image={sushi.image}
                    >
                        <button className={styles.greyboxbutton} onClick={event => addValue(sushi)}>adicionar</button>
                    </Greybox>
                </div>
            ))}
            <div className={styles.footer} onClick={toCart}>
                <p>Carrinho</p>
                <div className={styles.inline}>
                    <p>R$ {total},00</p>
                    <div style={{ width: "15px" }}></div>
                    <span className="mdi mdi-cart-plus" style={{ float: "right", fontSize: "20px" }}></span>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3004/sushis');
    const sushis = await res.json()

    return {
        props: {
            sushis,
        },
    };
}
