import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { aircraftList } from './data/aircraft.js'
//import Aircrafts from './db/views.js'


export default function App() {
    const [index, setIndex] = useState(0);

    function handleNext() {
        if (index < aircraftList.length - 1) {
            setIndex(index + 1);
        } 
    }
    
    function handlePrevious() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    let aircraft = aircraftList[index];

    return (
        <>
            <h1>Poniżej znajduje się opis samolotów dostępnych w bazie.</h1>
            <p>(<b>{index + 1}</b> out of <b>{aircraftList.length}</b>)</p>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
            <div>
                <ul>
                    <li>ID: {aircraft.id}</li>
                    <li>Kind: {aircraft.kind}</li>
                    <li>Type: {aircraft.type}</li>
                    <li>Identification Mark: {aircraft.identification_mark}</li>
                    <li>Hours flown: {aircraft.hours_flown}</li>
                </ul>
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);