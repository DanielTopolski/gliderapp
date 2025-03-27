import { useTranslation } from 'react-i18next';


const AccBalance = () => {
    const { t } = useTranslation();

    return <h1>{t('account.header')}</h1>;
};

export default AccBalance;