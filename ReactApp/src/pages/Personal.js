import React from "react"
import useDB from "../modules/useDB"
import styles from "../App.module.css"


const Personal = () => {
    const data = useDB('person',null,'id',1);
    console.log(data);
    return (
            <>
                <h1>Detailed info about the pilot</h1>
                <hr />
                {data && data.map((item) => {
                        return (
                            <>
                                <div title={"Personal info"} className={styles.persInfo} >
                                    <h2>Personal info</h2>
                                    <p><strong>First name:</strong> {item.first_name}</p>
                                    <p><strong>Last name:</strong> {item.last_name}</p>
                                    <p><strong>Date of birth:</strong> {item.date_of_birth}</p>
                                </div>
                                <div title={"Contact info"} className={styles.persInfo}>
                                    <h2>Contact info</h2>
                                    <p><strong>Phone number:</strong> {item.phone_no}</p>
                                    <p><strong>E-mail:</strong> {item.email}</p>
                                </div>
                                <div title={"Address info"} className={styles.persInfo}>
                                    <h2>Address info</h2>
                                    <p><strong>Street:</strong> {item.address_street}</p>
                                    <p><strong>Zip code:</strong> {item.address_zipcode}</p>
                                    <p><strong>City:</strong> {item.address_city}</p>
                                </div>
                                <div title={"Address info"} className={styles.persInfo}>
                                    <h2>Additional info</h2>
                                    <p>{item.remarks}</p>
                                    <hr />
                                </div>
                            </>
                        );
                    })
                }
            </>
            );
};


export default Personal;

