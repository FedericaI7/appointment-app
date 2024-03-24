import React from "react";
import Data from "../data";
import styles from "@/styles/DoctorCardsColumn.module.scss";
import Image from "next/image";
import { PiPhoneCallFill } from "react-icons/pi";
import { useRouter } from "next/router";

const DoctorCardsColumn = () => {
  const router = useRouter();

  const onHandleCall = (phone) => {
    const phoneNew = phone.replaceAll(" ", "");
    console.log(phoneNew);
    window.location.href = `tel:${phoneNew}`;
  };

  const onHandleBtnAppointment = (name, date, id) => {
    router.push(`/doctorList/${name}?date=${date}&id=${id}`);
    // console.log(id);
  };

  return (
    <Data>
      {({ user, dataJson }) => {
        // Destructuring di user direttamente qui
        const { results } = user;

        return (
          <div className={styles.DoctorCardsColumn}>
            {results && // Utilizzo di results direttamente
              dataJson &&
              results.map((el, index) => {
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
                          onHandleBtnAppointment(
                            `${el.name.first}${el.name.last}`,
                            `${el.registered?.date}`,
                            `${dataJson[index]?.id}`
                          )
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
      }}
    </Data>
  );
};

export default DoctorCardsColumn;
