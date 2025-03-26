import React from "react"
import useDB from "../modules/useDB"
import styles from "../App.module.css"


const Personal = () => {
    const data = useDB('person',null,'id.eq.1');
    const docs_data = useDB('document_pilot',null,'pilot_id.eq.1');
    
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
                                </div>
                            </>
                        );
                    })
                }
                <h1>Pilot's documents</h1>
                                <hr />
                                {docs_data && docs_data.map((item) => {
                                    if (item.type==='medical examination')    {
                                        return (
                                            <>
                                                <div title={"Documents info"} className={styles.persInfo} key={item.id}>
                                                    <p><strong>Document type: </strong>{item.type}</p>
                                                    <p><strong>Document number: </strong>{item.doc_no}</p>
                                                    <p><strong>Valid till: </strong>{item.valid_till}</p>
                                                    <p><strong>Class: </strong>{item.med_doc_class}</p>
                                                </div>
                                                <hr />
                                            </>
                                        );}
                                    else {
                                        return (
                                            <>
                                                <div title={"Documents info"} className={styles.persInfo} key={item.id}>
                                                    <p><strong>Document type: </strong>{item.type}</p>
                                                    <p><strong>Document number: </strong>{item.doc_no}</p>
                                                    <p><strong>Valid till: </strong>{item.valid_till}</p>
                                                </div>
                                                <hr />
                                            </>
                                        );}
                                    })
                                }
            </>
            );
};


export default Personal;

