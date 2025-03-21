import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js";


const project_url = "https://droqvfqshrxaorewhurw.supabase.co";
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyb3F2ZnFzaHJ4YW9yZXdodXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNDc4MjYsImV4cCI6MjA1NzgyMzgyNn0.c8a_gtJGeCwP78UYegLl6HnhlVgWk3E21PgVnOxlNmo";
const supabase = createClient(project_url, anon_key);

export default function useDB(tableName, properties) {
    const [data, setData] = useState(null);

    useEffect(() => {
      getDataFromDB();
    }, );

    async function getDataFromDB() {
      const { data } = await supabase.from(tableName).select();
      setData(data);
    }

    return data;
}