import React from "react"
import useDB from "../modules/useDB"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const Timekeeper = () => {
    const flight_data = useDB('detailed_flight_list',null,'timekeeper_id.eq.1');

    return (
        <>
            <h1>Timekeeper section</h1>
            <hr />
            <div className="card">
                <h2>Timekeeper's flight list</h2>
                <DataTable value={flight_data} columnResizeMode="expand" resizableColumns showGridlines scrollable scrollHeight="400px">
                    <Column field="flight_number" header="Flight no" style={{ minWidth: '100px' }}></Column>
                    <Column field="pilot_name" header="Pilot's name" style={{ minWidth: '100px' }}></Column>
                    <Column field="instructor_passenger_name" header="Instructor/passenger name" style={{ minWidth: '100px' }}></Column>
                    <Column field="aircraft" header="Aircraft" style={{ minWidth: '100px' }}></Column>
                    <Column field="task" header="Task" style={{ minWidth: '50px' }}></Column>
                    <Column field="exercise" header="Exercise" style={{ minWidth: '50px' }}></Column>
                    <Column field="takeoff_type" header="Takeoff type" style={{ minWidth: '100px' }}></Column>
                    <Column field="flight_start_time" header="Flight start time" style={{ minWidth: '100px' }}></Column>
                    <Column field="flight_landing_time" header="Flight landing time" style={{ minWidth: '100px' }}></Column>
                    <Column field="airfield" header="Airfield" style={{ minWidth: '100px' }}></Column>
                    <Column field="tp_or_winch_op_name" header="Tow plane/winch operator name" style={{ minWidth: '100px' }}></Column>
                    <Column field="tow_plane" header="Tow plane" style={{ minWidth: '100px' }}></Column>
                    <Column field="tp_time_of_flight" header="Tow plane time of flight" style={{ minWidth: '100px' }}></Column>
                    <Column field="tp_time_on_ground" header="Tow plane time on ground" style={{ minWidth: '100px' }}></Column>
                    <Column field="remarks" header="Remarks" style={{ minWidth: '100px' }}></Column>
                </DataTable>
            </div>
        </>
    );
};

export default Timekeeper;