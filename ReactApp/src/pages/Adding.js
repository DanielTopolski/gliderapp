import React, { useState } from "react"
import useDB from "../modules/useDB"
//import { DataTable } from 'primereact/datatable';
//import { Column } from 'primereact/column';
//import { useTranslation } from 'react-i18next';
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from "primereact/floatlabel";


const FlightAdding = () => {
    const pilots = useDB('pilot_names','pilot_name','id.gt.0');
    const instr = useDB('pilot_names','pilot_name','id.gt.0');

    const [selectedPilot, setSelectedPilot] = useState(null);
    const [selectedInstr, setSelectedInstr] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <FloatLabel className="w-full md:w-14rem">
                    <Dropdown inputId="pname" value={selectedPilot} placeholder="Select a pilot" onChange={(e) => setSelectedPilot(e.value)} options={pilots} optionLabel="pilot_name" className="w-full" />
                        <label htmlFor="pname">Select a pilot</label>

                    <Dropdown inputId="insname" value={selectedInstr} placeholder="Select an instructor" onChange={(e) => setSelectedInstr(e.value)} options={instr} optionLabel="pilot_name" className="w-full" />
                        <label htmlFor="insname">Select an instructor</label>
            </FloatLabel>
        </div>
    );
}

export default FlightAdding;