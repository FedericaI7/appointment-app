import Head from "next/head";
import styles from "@/styles/Home.module.scss";

import { CiFaceSmile } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import { CiFaceFrown } from "react-icons/ci";

import { FaUserDoctor } from "react-icons/fa6";
import { RiPsychotherapyFill } from "react-icons/ri";

import { useState } from "react";

export default function Home() {
  const [faceState, setFaceState] = useState({
    isFaceSmile: false,
    isFaceMeh: false,
    isFaceFrown: false,
  });

  const handleFace = (face) => {
    setFaceState({
      isFaceSmile: face === "smile",
      isFaceMeh: face === "meh",
      isFaceFrown: face === "frown",
    });
  };

  return (
    <>
      <Head>
        <title>Appointment App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1dbab5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <h1>How are you feeling today?</h1>
          <div className={styles.faces}>
            <button
              className={`${styles.btnFace} ${
                faceState.isFaceSmile && styles.btnFaceActive
              }`}
              onClick={() => handleFace("smile")}
            >
              <CiFaceSmile />
            </button>
            <button
              className={`${styles.btnFace} ${
                faceState.isFaceMeh && styles.btnFaceActive
              }`}
              onClick={() => handleFace("meh")}
            >
              <CiFaceMeh />
            </button>
            <button
              className={`${styles.btnFace} ${
                faceState.isFaceFrown && styles.btnFaceActive
              }`}
              onClick={() => handleFace("frown")}
            >
              <CiFaceFrown />
            </button>
          </div>
        </div>
        {faceState.isFaceSmile && (
          <div className={styles.resultFace}>
            <h3> Happy for you!</h3>
          </div>
        )}
        {(faceState.isFaceMeh || faceState.isFaceFrown) && (
          <div className={styles.resultFace}>
            <h3>Book an appointment</h3>
            {/* <hr /> */}
            <div className={styles.iconsContainer}>
              <FaUserDoctor />
              <RiPsychotherapyFill />
            </div>
            <button className={styles.btnBook}>Book now</button>
          </div>
        )}
      </main>
    </>
  );
}
