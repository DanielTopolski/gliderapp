import React from "react"
import useDB from "../modules/useDB"
import styles from "../App.module.css"


const GliderSect = () => {
    const flight_data = useDB('flight');
    const docs_data = useDB('pilot_glider');

    return (
        <>
            <h1>Glider Section</h1>
            <hr />
            <h2>Pilot data</h2>
            {docs_data && docs_data.map((item) => {
                  if (item.pilot_id===1) {
                      return (
                            <div title={"Glider section data"} className={styles.persInfo} key={item.pilot_id}>
                                <p><strong>Permission name:</strong> {item.permission}</p>
                                <p><strong>Total amount of hours flown:</strong> {item.hours_flown_total}</p>
                                <p><strong>Total amount of hours flown alone:</strong> {item.hours_flown_alone}</p>
                            </div>
                      );
                  }}
                )}
            <hr />
            <h2>Flight list</h2>
            <table className={styles.flightTable}>
                <tr>
                    <th>Flight ID</th>
                    <th>Pilot</th>
                    <th>Instructor/Passenger</th>
                    <th>Aircraft</th>
                    <th>Task</th>
                    <th>Exercise</th>
                    <th>Training</th>
                    <th>Takeoff Type</th>
                    <th>Start Time</th>
                    <th>Landing Time</th>
                    <th>Airfield</th>
                    <th>-</th>
                    <th>-</th>
                    <th>-</th>
                    <th>-</th>
                    <th>Timekeeper</th>
                    <th>Remarks</th>
                </tr>
                {flight_data && flight_data.map((item) => {
                    if (item.pilot_id===1) {
                        return ( 
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.pilot_id}</td>
                                    <td>{item.instructor_passenger_id}</td>
                                    <td>{item.aircraft_id}</td>
                                    <td>{item.task}</td>
                                    <td>{item.exercise}</td>
                                    <td>{item.training}</td>
                                    <td>{item.takeoff_type}</td>
                                    <td>{item.start_time}</td>
                                    <td>{item.landing_time}</td>
                                    <td>{item.airfield}</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>{item.timekeeper}</td>
                                    <td>{item.remarks}</td>
                                </tr>
                        );}
                    })
                }
                </table>
        </>
    );
};

export default GliderSect;