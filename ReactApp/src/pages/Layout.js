import { Outlet, Link } from "react-router-dom";
import styles from "../App.module.css";
import { useTranslation } from 'react-i18next';


const lngs = {
    pl: { nativeName: 'Polski' },
    en: { nativeName: 'English' } 
};
  

const Layout = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className={styles.trans}>
                {Object.keys(lngs).map((lng) => (
                <button key={lng} className={styles.navButton} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                    {lngs[lng].nativeName}
                </button>
                ))}
            </div>
            <div className={styles.navmenu}>
                <nav>
                        <Link to="/home" className={styles.navButton}>
                            <button>{t('layout.start')}</button>
                        </Link>
                        <Link to="/personal" className={styles.navButton}>
                            <button>{t('layout.persinfo')}</button>
                        </Link>
                        <Link to="/glidersec" className={styles.navButton}>
                            <button>{t('layout.glidersec')}</button>
                       </Link>
                        <Link to="/airplanesec" className={styles.navButton}>
                            <button>{t('layout.airplanesec')}</button>
                        </Link>
                        <Link to="/accbalance" className={styles.navButton}>
                            <button>{t('layout.accountbal')}</button>
                        </Link>
                        <Link to="/timekeeper" className={styles.navButton}>
                            <button>{t('layout.tkeeper')}</button>
                        </Link>
                        <Link to="/" className={styles.navButton}>
                            <button>{t('layout.signout')}</button>
                        </Link>
                </nav>
            </div>
            <Outlet />
        </>
    );
};

export default Layout;