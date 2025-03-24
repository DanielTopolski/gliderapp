import React from "react"
import useDB from "../modules/useDB"
import styles from "../App.module.css"


const Flight = () => {
    const data = useDB('flight');

    return (
            <>
                <h1>Flight info</h1>
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
                {data && data.map((item) => {
                    //if (item.pilot_id===1) {
                        return ( 
                                <tr>
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
                        );//}
                    })
                }
                </table>
            </>
            );
};

export default Flight;