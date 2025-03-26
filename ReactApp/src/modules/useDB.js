import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const projectURL = "https://droqvfqshrxaorewhurw.supabase.co";
const anonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyb3F2ZnFzaHJ4YW9yZXdodXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNDc4MjYsImV4cCI6MjA1NzgyMzgyNn0.c8a_gtJGeCwP78UYegLl6HnhlVgWk3E21PgVnOxlNmo";
const supabase = createClient(projectURL, anonkey);

export default function useDB(tableName, col_names, name, val) {
    const [data, setData] = useState(null);

    useEffect(() => {
      getDBData();
    },[] );

    async function getDBData() {
      const { data } = await supabase
        .from(tableName)
        .select(col_names)
        .eq(name, val);

      setData(data);
    }

    return data;
}

export function useDBor(tableName, col_names, conditions) {
    const [data, setData] = useState(null);

    useEffect(() => {
      getDBData();
    },[] );

    async function getDBData() {
      const { data } = await supabase
        .from(tableName)
        .select(col_names)
        .or(conditions);

      setData(data);
    }

    return data;
}

export function useDBand(tableName, col_names, conditions) {
    const [data, setData] = useState(null);

    useEffect(() => {
      getDBData();
    },[] );

    async function getDBData() {
      const { data } = await supabase
        .from(tableName)
        .select(col_names)
        .and(conditions);

      setData(data);
    }

    return data;
}