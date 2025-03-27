import React from "react"
import useDB from "../modules/useDB"
import styles from "../App.module.css"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/nano/theme.css";


const AirplaneSec = () => {
    const flight_data = useDB('detailed_flight_list',null,'and(aircraft_kind.eq.airplane,or(pilot_id.eq.1,instructor_passenger_id.eq.1))');
    const docs_data = useDB('pilot_airplane',null,'pilot_id.eq.1');

    return (
        <>
            <h1>Airplane Section</h1>
            <hr />
            <h2>Flight list</h2>
            <div className="card">  
                    <DataTable value={flight_data} columnResizeMode="expand" resizableColumns showGridlines scrollable scrollHeight="400px">
                        <Column field="flight_number" header="Flight no" style={{ minWidth: '100px' }}></Column>
                        <Column field="instructor_passenger_name" header="Instructor/passenger" style={{ minWidth: '100px' }}></Column>
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
                        <Column field="timekeeper" header="Timekeeper" style={{ minWidth: '100px' }}></Column>
                        <Column field="remarks" header="Remarks" style={{ minWidth: '100px' }}></Column>
                    </DataTable>
            </div>
            <hr />
            <h2>Pilot data</h2>
            {docs_data && docs_data.map((item) => {
                      return (
                            <div title={"Airplane section data"} className={styles.persInfo} key={item.pilot_id}>
                                <p><strong>Permission name:</strong> {item.permission}</p>
                                <p><strong>Total amount of hours flown:</strong> {item.hours_flown_total}</p>
                                <p><strong>Total amount of hours flown alone:</strong> {item.hours_flown_alone}</p>
                                <p><strong>Winch permission: {item.winch_perm}</strong></p>
                            </div>
                      );
                  }
                )} 
        </>
    );
};

export default AirplaneSec;