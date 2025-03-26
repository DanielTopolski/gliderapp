import React from "react"
import useDB from "../modules/useDB"
import styles from "../App.module.css"

const Timekeeper = () => {
    const flight_data = useDB('detailed_flight_list',null,'timekeeper_id.eq.1');
    
    return (
            <>
                <h1>Timekeeper section</h1>
                <hr />
                <h2>Timekeeper's flight list</h2>
                <table className={styles.flightTable}>
                    <tr>
                        <th>Flight number</th>
                        <th>Pilot's name</th>
                        <th>Instructor/Passenger name</th>
                        <th>Aircraft</th>
                        <th>Task</th>
                        <th>Exercise</th>
                        <th>Takeoff type</th>
                        <th>Start Time</th>
                        <th>Landing Time</th>
                        <th>Airfield</th>
                        <th>Tow plane or winch operator name</th>
                        <th>Tow plane</th>
                        <th>Tow plane time of flight</th>
                        <th>Tow plane time on ground</th>
                        <th>Timekeeper</th>
                        <th>Remarks</th>
                    </tr>
                    {flight_data && flight_data.map((item) => {
                            return ( 
                                    <tr key={item.id}>
                                        <td>{item.flight_number}</td>
                                        <td>{item.pilot_name}</td>
                                        <td>{item.instructor_passenger_name}</td>
                                        <td>{item.aircraft}</td>
                                        <td>{item.task}</td>
                                        <td>{item.exercise}</td>
                                        <td>{item.takeoff_type}</td>
                                        <td>{item.flight_start_time}</td>
                                        <td>{item.flight_landing_time}</td>
                                        <td>{item.airfield}</td>
                                        <td>{item.tp_or_winch_op_name}</td>
                                        <td>{item.tp_id}</td>
                                        <td>{item.tp_time_of_flight}</td>
                                        <td>{item.tp_time_on_ground}</td>
                                        <td>{item.timekeeper_name}</td>
                                        <td>{item.remarks}</td>
                                    </tr>
                            );
                        })
                    }
                    </table>
            </>
        );
};

export default Timekeeper;