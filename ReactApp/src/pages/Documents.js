import React from "react"
import useDB from "../modules/useDB"
import styles from "../App.module.css"


const Documents = () => {
    const data = useDB('document_pilot',null,'pilot_id.eq.1');

    console.log(data);
    return (
            <>
                <h1>Pilot's documents</h1>
                <hr />
                {data && data.map((item) => {
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


export default Documents;

