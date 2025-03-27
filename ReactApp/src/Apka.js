import logo from './logo.svg';
//import './App.css';
import { useTranslation, Trans } from 'react-i18next';
import { Suspense } from 'react';

const lngs = {
    en: { nativeName: 'English' },
    pl: { nativeName: 'Polski' }
};
  
function Apka() {
    const { t, i18n } = useTranslation();
  
    return (
      <div className="Apka">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {Object.keys(lngs).map((lng) => (
              <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
          <p>
            <Trans i18nKey="description.part1">
              Edit <code>src/Apka.js</code> and save to reload.
            </Trans>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('description.part2')}
          </a>
        </header>
      </div>
    );
}
  
export default function WrappedApka() {
    return (
      <Suspense fallback="...is loading">
        <Apka />
      </Suspense>
    );
  }