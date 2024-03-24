import styles from "@/styles/Doctor.module.scss";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Data from "../data";

import { IoIosArrowBack } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { TiLocation } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";

const Doctor = () => {
  const router = useRouter();
  const { date } = router.query;
  const { id } = router.query;

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
                <main className={styles.main}>
                  <h1>{`${el.name.first} ${el.name.last}`}</h1>
                  <p>{dataJson.job}</p>
                  <p>{dataJson.gender}</p>
                  {console.log(findDoctor)}
                  <div className={styles.location}>
                    <span className={styles.locationIcon}>
                      <TiLocation />
                    </span>
                    {el.location.city}
                  </div>
                  <p>{dataJson[id - 1].job}</p>
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
