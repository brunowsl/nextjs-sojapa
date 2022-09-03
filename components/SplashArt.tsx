import { useRouter } from 'next/router';
import styles from '../styles/style.module.css';
import { SpinnerLoading } from './Spinner';

// SHOW SPLASHSCREEN AND AFTER 3 SECONS GO TO MAIN PAGE
export function SplashArt() {
    const router = useRouter()
    setTimeout(() => {
        router.push('/main');
    }, 3000);
    return (
        <div className={styles.container}>
            <img src="./images/logo1.png" alt="logo" />
            <p className={styles.logo}>sojapa</p>
        </div>
    );
}