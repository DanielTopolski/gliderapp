export default function Aircrafts() {  

    const db = require('better-sqlite3')('database2.db');     
    
    const getAircrafts = () => {   

    const sql = `
        SELECT * FROM aircraft
    `
    const rows = db.prepare(sql).all()
    return rows;
    };
    
getAircrafts();

}