import { useState, useEffect } from "react"


export default function useDB(tableName, properties) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/' + tableName + '.json')
          .then((res) => res.json())
          .then((data) => setData(data));
        }, [tableName]);
    
    return data;
}