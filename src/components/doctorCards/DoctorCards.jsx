import styles from "@/styles/DoctorCard.module.scss";

import Image from "next/image";
import { userData } from "@/API/Apicall";
import { useState, useEffect } from "react";
import { PiPhoneCallFill } from "react-icons/pi";

const DoctorCards = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const users = await userData(8);
      console.log(users);
      setUser(users);
    };

    fetchData();
  }, []);

  const onHandleCall = (phone) => {
    let phoneNew = phone.replaceAll(" ", "");
    console.log(phoneNew);
    window.location.href = `tel:${phoneNew}`;
  };

  return (
    <div className={styles.DoctorCards}>
      {/* {results?.map((el, index) => {
        return (
          <div className={styles.boxCard} key={index}>
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
      })} */}
    </div>
  );
};

export default DoctorCards;
