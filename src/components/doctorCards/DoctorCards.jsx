import styles from "@/styles/DoctorCard.module.scss";
import Image from "next/image";
import Data from "../data";
import { PiPhoneCallFill } from "react-icons/pi";

const DoctorCards = () => {
  const onHandleCall = (phone) => {
    let phoneNew = phone.replaceAll(" ", "");
    console.log(phoneNew);
    window.location.href = `tel:${phoneNew}`;
  };

  return (
    <Data>
      {({ user, dataJson }) => {
        const { results } = user;
        const firstEightResults = results?.slice(0, 8);
        return (
          <div className={styles.DoctorCards}>
            {firstEightResults?.map((el, index) => {
              return (
                <div className={styles.boxCard} key={index}>
                  <div>
                    <Image
                      // src={el.picture?.large}
                      src={dataJson[index]?.image}
                      width={1000}
                      height={1000}
                      alt="doctor picture"
                    />
                  </div>

                  <div className={styles.infoBoxText}>
                    <h3>{`Dr. ${el.name?.first} ${el.name?.last}`}</h3>
                    <p className={styles.city}>{el.location.city}</p>

                    <div className={styles.callToAction}>
                      <p className={styles.dateAppointment}>
                        {dataJson[index]?.nextAppointmentDate}
                      </p>
                      <span
                        onClick={() => onHandleCall(el.phone)}
                        className={styles.telIcon}
                      >
                        <PiPhoneCallFill />
                      </span>
                    </div>
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

export default DoctorCards;
