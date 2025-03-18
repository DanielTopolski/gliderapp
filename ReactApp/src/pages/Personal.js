import React from "react"
import useDB from "../modules/useDB"
import styles from "../App.module.css"


const Personal = () => {
    const data = useDB('pilot');

    return (
            <>
                <h1>Detailed info about the pilot</h1>
                {data && data.map((item) => {
                        return (
                            <>
                                <div title={"Personal info"} className={styles.persInfo} >
                                    <h2>Personal info</h2>
                                    <p><strong>First name:</strong> {item.first_name}</p>
                                    <p><strong>Last name:</strong> {item.last_name}</p>
                                    <p><strong>Date of birth:</strong> {item.date_of_birth}</p>
                                </div>
                                <div title={"Contant info"} className={styles.persInfo}>
                                    <h2>Contact info</h2>
                                    <p><strong>Phone number:</strong> {item.phone_no}</p>
                                    <p><strong>E-mail:</strong> {item.email}</p>
                                </div>
                                <div title={"Address info"} className={styles.persInfo}>
                                    <h2>Address info</h2>
                                    <p><strong>Street:</strong> {item.address.street}</p>
                                    <p><strong>Zip code:</strong> {item.address.zip_code}</p>
                                    <p><strong>City:</strong> {item.address.city}</p>
                                </div>
                                <div title={"Address info"} className={styles.persInfo}>
                                    <h2>Additional info</h2>
                                    <p>{item.remarks}</p>
                                </div>
                            </>
                        );
                    })
                }
            </>
            );
};


export default Personal;

