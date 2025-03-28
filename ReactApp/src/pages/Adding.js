import React, { useState } from "react";
import useDB from "../modules/useDB";
import styles from "../App.module.css";
//import { DataTable } from 'primereact/datatable';
//import { Column } from 'primereact/column';
//import { useTranslation } from 'react-i18next';
import { Dropdown } from 'primereact/dropdown';
//import { FloatLabel } from "primereact/floatlabel";


const FlightAdding = () => {
    const pilots = useDB('view_pilot_names','pilot_name','id.gt.0');
    const instr = useDB('view_pilot_names','pilot_name','id.gt.0');
    const aircr = useDB('view_aircrafts_info','aircraft_data','id.gt.0');

    const [selectedPilot, setSelectedPilot] = useState(null);
    const [selectedInstr, setSelectedInstr] = useState(null);
    const [selectedAircraft, setSelectedAircraft] = useState(null);

    return (
        <div>
            <div className="card flex justify-content-center">
                    <h4 className={styles.pageHeader}>Pilot</h4>
                    <Dropdown inputId="pname" value={selectedPilot} placeholder="Select a pilot" onChange={(e) => setSelectedPilot(e.value)} options={pilots} optionLabel="pilot_name" className="w-full" />
            </div>
            <div className="card flex justify-content-center">
                    <h4 className={styles.pageHeader}>Instructor</h4>
                    <Dropdown inputId="insname" showClear value={selectedInstr} placeholder="Select an instructor" onChange={(e) => setSelectedInstr(e.value)} options={instr} optionLabel="pilot_name" className="w-full" />
            </div>
            <div className="card flex justify-content-center">
                    <h4 className={styles.pageHeader}>Aircraft</h4>
                    <Dropdown inputId="pname" value={selectedAircraft} placeholder="Select an aircraft" onChange={(e) => setSelectedAircraft(e.value)} options={aircr} optionLabel="aircraft_data" className="w-full" />
            </div>
        </div>
    );
}

export default FlightAdding;