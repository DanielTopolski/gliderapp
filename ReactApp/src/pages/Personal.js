import React from "react"
import useDB from "../modules/useDB"
import styles from "../App.module.css"
import { useTranslation } from 'react-i18next';


const Personal = () => {
    const { t } = useTranslation();
    const data = useDB('person',null,'id.eq.1');
    const docs_data = useDB('document_pilot',null,'pilot_id.eq.1');

    return (
            <>
                <h1>{t('personal.info_header')}</h1>
                <hr />
                {data && data.map((item) => {
                        return (
                            <>
                                <div title={"Personal info"} className={styles.persInfo}>
                                    <h2>{t('personal.docs_header')}</h2>
                                    <p><strong>{t('personal.pname')}</strong> {item.first_name}</p>
                                    <p><strong>{t('personal.psurname')}</strong> {item.last_name}</p>
                                    <p><strong>{t('personal.pdob')}</strong> {item.date_of_birth}</p>
                                </div>
                                <div title={"Contact info"} className={styles.persInfo}>
                                    <h2>{t('personal.cont_head')}</h2>
                                    <p><strong>{t('personal.pphone')}</strong> {item.phone_no}</p>
                                    <p><strong>E-mail:</strong> {item.email}</p>
                                </div>
                                <div title={"Address info"} className={styles.persInfo}>
                                    <h2>{t('personal.address_head')}</h2>
                                    <p><strong>{t('personal.pstreet')}</strong> {item.address_street}</p>
                                    <p><strong>{t('personal.pzip')}</strong> {item.address_zipcode}</p>
                                    <p><strong>{t('personal.pcity')}</strong> {item.address_city}</p>
                                </div>
                                <div title={"Address info"} className={styles.persInfo}>
                                    <h2>{t('personal.addinfo_head')}</h2>
                                    <p>{item.remarks}</p>
                                </div>
                            </>
                        );
                    })
                }
                <h1>{t('personal.docs_header')}</h1>
                                <hr />
                                {docs_data && docs_data.map((item) => {
                                    if (item.type==='medical examination')    {
                                        return (
                                            <>
                                                <div title={"Documents info"} className={styles.persInfo} key={item.pilot_id}>
                                                    <p><strong>{t('personal.doctype')}</strong>{item.type}</p>
                                                    <p><strong>{t('personal.docno')}</strong>{item.doc_no}</p>
                                                    <p><strong>{t('personal.valdate')}</strong>{item.valid_till}</p>
                                                    <p><strong>{t('personal.class')}</strong>{item.med_doc_class}</p>
                                                </div>
                                                
                                            </>
                                        );}
                                    else {
                                        return (
                                            <>
                                                <div title={"Documents info"} className={styles.persInfo} key={item.id}>
                                                    <p><strong>{t('personal.doctype')}</strong>{item.type}</p>
                                                    <p><strong>{t('personal.docno')}</strong>{item.doc_no}</p>
                                                    <p><strong>{t('personal.valdate')}</strong>{item.valid_till}</p>
                                                </div>
                                                
                                            </>
                                        );}
                                    })
                                }
            </>
            );
};


export default Personal;

