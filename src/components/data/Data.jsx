import React, { useState, useEffect } from "react";
import { userData } from "@/API/Apicall";

const Data = ({ children }) => {
  const [user, setUser] = useState({});
  const [dataJson, setDataJson] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await userData(20);
        setUser(users);
      } catch (error) {
        console.error("Errore nel caricamento dei dati degli utenti:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataJson = async () => {
      try {
        const response = await fetch("/dati.json");
        const jsonData = await response.json();
        setDataJson(jsonData);
      } catch (error) {
        console.error("Errore nel caricamento dei dati JSON:", error);
      }
    };

    fetchDataJson();
  }, []);

  return children({ user, dataJson });
};

export default Data;
