import styles from "@/styles/DoctorCardsColumn.module.scss";

import Image from "next/image";
import { userData } from "@/API/Apicall";
import { useState, useEffect } from "react";
import { PiPhoneCallFill } from "react-icons/pi";

const DoctorCardsColumn = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const users = await userData(30);
      console.log(users);
      setUser(users);
    };

    fetchData();
  }, []);

  const { results } = user;

  const onHandleCall = (phone) => {
    let phoneNew = phone.replaceAll(" ", "");
    console.log(phoneNew);
    window.location.href = `tel:${phoneNew}`;
  };

  return (
    <div className={styles.DoctorCardsColumn}>
      {results?.map((el, index) => {
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
              <h3>{`Doct. ${el.name?.first} ${el.name?.last}`}</h3>
              <p className={styles.city}>{el.location.city}</p>
              <span
                onClick={() => onHandleCall(el.phone)}
                className={styles.telIcon}
              >
                <PiPhoneCallFill />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorCardsColumn;
