import { useTranslation } from 'react-i18next';
import styles from "../App.module.css";

const AccBalance = () => {
    const { t } = useTranslation();

    return <h1 className={styles.pageHeader}>{t('account.header')}</h1>;
};

export default AccBalance;