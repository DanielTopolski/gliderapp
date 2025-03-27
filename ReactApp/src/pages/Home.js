import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('home.main')}</h1>
            <h2>{t('home.header')}</h2>
        </>
    );
}
