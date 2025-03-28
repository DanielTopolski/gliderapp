import React from "react"
import useDB from "../modules/useDB"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useTranslation } from 'react-i18next';


const Timekeeper = () => {
    const { t } = useTranslation();
    const flight_data = useDB('detailed_flight_list',null,'timekeeper_id.eq.1');

    return (
        <>
            <h1>{t('timekeeper.header')}</h1>
            <hr />
            <div className="card">
                <h2>{t('timekeeper.flight_head')}</h2>
                <DataTable value={flight_data} columnResizeMode="expand" resizableColumns showGridlines scrollable scrollHeight="400px">
                    <Column field="flight_number" header={t('flight_list.flightno')} style={{ minWidth: '100px' }}></Column>
                    <Column field="pilot_name" header={t('flight_list.pilot')} style={{ minWidth: '100px' }}></Column>
                    <Column field="instructor_passenger_name" header={t('flight_list.instr')} style={{ minWidth: '100px' }}></Column>
                    <Column field="aircraft_kind" header={t('flight_list.air_kind')} style={{ minWidth: '100px' }}></Column>
                    <Column field="aircraft" header={t('flight_list.aircraft')} style={{ minWidth: '100px' }}></Column>
                    <Column field="task" header={t('flight_list.task')} style={{ minWidth: '50px' }}></Column>
                    <Column field="exercise" header={t('flight_list.exer')} style={{ minWidth: '50px' }}></Column>
                    <Column field="takeoff_type" header={t('flight_list.takeoff')} style={{ minWidth: '100px' }}></Column>
                    <Column field="flight_start_time" header={t('flight_list.fl_start')} style={{ minWidth: '100px' }}></Column>
                    <Column field="flight_landing_time" header={t('flight_list.fl_end')} style={{ minWidth: '100px' }}></Column>
                    <Column field="airfield" header={t('flight_list.airfield')} style={{ minWidth: '100px' }}></Column>
                    <Column field="tp_or_winch_op_name" header={t('flight_list.tp_w_op')} style={{ minWidth: '100px' }}></Column>
                    <Column field="tow_plane" header={t('flight_list.tp')} style={{ minWidth: '100px' }}></Column>
                    <Column field="tp_time_of_flight" header={t('flight_list.tp_fltime')} style={{ minWidth: '100px' }}></Column>
                    <Column field="tp_time_on_ground" header={t('flight_list.tp_groundtime')} style={{ minWidth: '100px' }}></Column>
                    <Column field="remarks" header={t('flight_list.rem')} style={{ minWidth: '100px' }}></Column>
                </DataTable>
            </div>
        </>
    );
};

export default Timekeeper;