import styles from "@/styles/DoctorCardsColumn.module.scss";
import Image from "next/image";
import { userData } from "@/API/Apicall";
import { useState, useEffect } from "react";
import { PiPhoneCallFill } from "react-icons/pi";

import { useRouter } from "next/router";

const DoctorCardsColumn = () => {
  const [user, setUser] = useState({});
  const [dataJson, setDataJson] = useState();
  const router = useRouter();

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

  const { results } = user;

  const onHandleCall = (phone) => {
    let phoneNew = phone.replaceAll(" ", "");
    console.log(phoneNew);
    window.location.href = `tel:${phoneNew}`;
  };

  const onHandleBtnAppointment = (name) => {
    router.push(`/doctorList/${name}`);
  };

  return (
    <div className={styles.DoctorCardsColumn}>
      {results?.map((el, index) => {
        const genderColor = el.gender === "male" ? "#a8dcd9" : "pink";
        return (
          <div className={styles.boxCardColumn} key={index}>
            <div>
              <Image
                src={el.picture?.large}
                width={100}
                height={100}
                alt="doctor picture"
              />
            </div>

            <div className={styles.infoBoxText}>
              <h3>{`Dr. ${el.name?.first} ${el.name?.last}`}</h3>

              <p style={{ color: genderColor }} className={styles.job}>
                {dataJson[index]?.job}
              </p>

              <p className={styles.city}>{el.location.city}</p>

              <span
                onClick={() => onHandleCall(el.phone)}
                className={styles.telIcon}
              >
                <PiPhoneCallFill />
              </span>

              <button
                onClick={() =>
                  onHandleBtnAppointment(`${el.name.first}${el.name.last}`)
                }
              >
                Appointment
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorCardsColumn;
