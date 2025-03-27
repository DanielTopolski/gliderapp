import { Outlet, Link } from "react-router-dom";
import styles from "../App.module.css"


const Layout = () => {
    return (
        <>
            <nav>
                        <Link to="/home" className={styles.navButton}>
                            <button>Home</button>
                        </Link>
                        <Link to="/personal" className={styles.navButton}>
                            <button>Personal Info</button>
                        </Link>
                        <Link to="/glidersec" className={styles.navButton}>
                            <button>Glider Section</button>
                        </Link>
                        <Link to="/airplanesec" className={styles.navButton}>
                            <button>Airplane section</button>
                        </Link>
                        <Link to="/accbalance" className={styles.navButton}>
                            <button>Account balance</button>
                        </Link>
                        <Link to="/timekeeper" className={styles.navButton}>
                            <button>Timekeeper</button>
                        </Link>
                        <Link to="/" className={styles.navButton}>
                            <button>Sign out</button>
                        </Link>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;