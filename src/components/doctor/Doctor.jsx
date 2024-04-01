import styles from "@/styles/Doctor.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import Data from "../data";
import CalendarComponent from "../calendar";

import { IoIosArrowBack } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { TiLocation } from "react-icons/ti";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Doctor = () => {
  const router = useRouter();
  const { date } = router.query;
  const { id } = router.query;
  const [isBooked, setIsBooked] = useState(false);

  return (
    <Data>
      {({ user, dataJson }) => {
        const { results } = user;
        const findDoctor = results?.filter(
          (el) => el.registered?.date === date
        );
        return (
          <div className={styles.Doctor}>
            {findDoctor?.map((el, index) => (
              <div key={index}>
                <nav className={styles.navTitle}>
                  <span className={styles.iconBack}>
                    <Link href="/doctorList">
                      <IoIosArrowBack />
                    </Link>
                  </span>
                  <div className={styles.titleCenter}>
                    <Image
                      width={100}
                      height={100}
                      alt={`${el.name.first} ${el.name.last}`}
                      src={el.picture?.large}
                    />
                  </div>
                  <span className={styles.heartIcon}>
                    <GoHeartFill />
                  </span>
                </nav>

                {/* --MAIN-- */}
                <main className={styles.main}>
                  <section className={styles.infoDoctor}>
                    <h1>{`${el.name.first} ${el.name.last}`}</h1>
                    <p>{dataJson.job}</p>
                    <p>{dataJson.gender}</p>
                    <div className={styles.location}>
                      <span className={styles.locationIcon}>
                        <TiLocation />
                      </span>
                      {el.location.city}
                    </div>
                    <p>{dataJson[id - 1].job}</p>
                  </section>

                  {/* ---SECTION BOX--- */}
                  <section className={styles.boxInfo}>
                    {/* --one-- */}
                    <div className={styles.box}>
                      <h5>Patients</h5>
                      <span className={styles.iconBox}>
                        <FaPeopleRoof />
                      </span>
                      <p>{dataJson[id - 1].patients}</p>
                    </div>
                    {/* ---two-- */}
                    <div className={styles.box}>
                      <h5>Experience</h5>
                      <span className={styles.iconBox}>
                        <FaUserDoctor />
                      </span>
                      <p>{dataJson[id - 1].experience + "y"}</p>
                    </div>
                    {/* ---three-- */}
                    <div className={styles.box}>
                      <h5>Rating</h5>
                      <span className={styles.iconBox}>
                        <FaStar />
                      </span>
                      <p>{dataJson[id - 1].rating}</p>
                    </div>
                  </section>
                  {/* ----ABOUT------- */}
                  <section className={styles.bottomInfo}>
                    <span className={styles.info}>
                      <h4>About</h4>
                      <p className={styles.bottomInfoPar}>
                        {dataJson[id - 1].description}
                      </p>
                    </span>
                    {/* -----AVAIABLE------ */}
                    <span className={styles.info}>
                      <h4>Avaiable</h4>
                      <p className={styles.bottomInfoPar}>
                        Tuesday/Thursday: 9:00/12:30
                      </p>
                    </span>
                    {/* ---CONSULTATION--- */}
                    <span className={styles.info}>
                      <h4>Consultation</h4>
                      <p className={styles.bottomInfoPar}>Consultation free</p>
                    </span>
                    {/* ---CALENDAR--- */}
                    <CalendarComponent
                      isBooked={isBooked}
                      setIsBooked={setIsBooked}
                    />
                  </section>
                </main>
              </div>
            ))}
          </div>
        );
      }}
    </Data>
  );
};

export default Doctor;
