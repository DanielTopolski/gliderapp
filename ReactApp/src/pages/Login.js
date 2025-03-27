import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../App.module.css";
import { useTranslation } from 'react-i18next';


const lngs = {
    pl: { nativeName: 'Polski' },
    en: { nativeName: 'English' } 
};
  

//import bcrypt from "bcryptjs-react";

//const salt = bcrypt.genSaltSync(10);

export default function LoginForm() {
    const [inputs, setInputs] = useState({});
    
    const { t, i18n } = useTranslation();
    const login = 'jkow77';
    const password ='31454fdf';
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        //const haslo = inputs.pwd;
        //const hashedPassword = bcrypt.hashSync(haslo, salt);
        //alert("Haslo: " + haslo + " Hash: "+ hashedPassword + " Sól: " + salt);
        if (inputs.usr===login&&inputs.pwd===password) {
            alert("Dane logowania poprawne!");
            navigate("./home");
        }
        else if (inputs.usr===undefined&&inputs.pwd===undefined) {
            alert("Both username and password missing. Please try again.");
            window.location.reload();
        }
        else if (inputs.usr===undefined) {
            alert("Username missing. Please try again.");
            window.location.reload();
        }
        else if (inputs.pwd===undefined) {
            alert("Password missing. Please try again.");
            window.location.reload();
        }
        else {
           alert("Wrong username or password! Please try again.");
            window.location.reload();
        }
    }

    return (
        <>
            <div className={styles.trans}>
                {Object.keys(lngs).map((lng) => (
                <button key={lng} className={styles.navButton} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                    {lngs[lng].nativeName}
                </button>
                ))}
            </div>
            <h1>{t('login.main')}</h1>
            <h2>{t('login.head')}</h2>
            <div style={{textAlign: "center", margin: "auto"}}>
                <Link to="/home">
                    <button>{t('login.skip')}</button>
                </Link>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="usr">{t('login.usr')}<br />
                            <input
                                type="text"
                                name="usr"
                                id="usr"
                                placeholder="username"
                                value={inputs.usr || ""} 
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label htmlFor="pwd">{t('login.pswd')}<br />
                            <input
                                type="password"
                                name="pwd"
                                id="pwd"
                                placeholder="password"
                                value={inputs.pwd || ""} 
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label htmlFor="sub">
                            <input
                                type="submit" value={t('login.sub')}
                            />
                        </label>
                    </p>
                    
                </form>
            </div>
        </>
    )
}

//<p>This <strong>{salt}</strong> is your current salt.<br /></p>