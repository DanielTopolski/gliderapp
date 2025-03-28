import { useTranslation } from 'react-i18next';
import styles from "../App.module.css";

export default function Home() {
    const { t } = useTranslation();

    return (
        <>
            <div className={styles.pageHeader}>
                <h1>{t('home.main')}</h1>
                <h2>{t('home.header')}</h2>
            </div>
        </>
    );
}
