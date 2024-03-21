import styles from "@/styles/Doctor.module.scss";

import { userData } from "@/API/Apicall";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Data from "../data";

const Doctor = () => {
  // const [user, setUser] = useState({});
  // const [dataJson, setDataJson] = useState();
  const router = useRouter();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const users = await userData(20);
  //       console.log(users);
  //       setUser(users);
  //     } catch (error) {
  //       console.error("Errore nel caricamento dei dati degli utenti:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchDataJson = async () => {
  //     try {
  //       const response = await fetch("/dati.json");
  //       const jsonData = await response.json();
  //       setDataJson(jsonData);
  //     } catch (error) {
  //       console.error("Errore nel caricamento dei dati JSON:", error);
  //     }
  //   };

  //   fetchDataJson();
  // }, []);

  const { id } = router.query;

  return (
    <Data>
      {({ user, dataJson }) => {
        const { results } = user;
        const findDoctor = results?.filter((el) => el.registered?.date === id);
        {
          console.log(findDoctor);
        }
        return (
          <div className={styles.Doctor}>
            <div className={styles.DoctorListDynamic}>
              <h1>Benvenuto {id}</h1>
            </div>
          </div>
        );
      }}
    </Data>
  );
};

export default Doctor;
