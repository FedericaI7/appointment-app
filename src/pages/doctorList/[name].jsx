import styles from "@/styles/DoctorList.module.scss";

import { userData } from "@/API/Apicall";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function DoctorListDynamic() {
  const [user, setUser] = useState({});
  const [dataJson, setDataJson] = useState();
  const router = useRouter;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await userData(20);
        console.log(users);
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

  return (
    <div className={styles.DoctorListDynamic}>
      {/* <h1>Benvenuto: {name} </h1> */}
      <h1>benevenuto </h1>
    </div>
  );
}
