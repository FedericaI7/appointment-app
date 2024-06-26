import Head from "next/head";
import styles from "../../styles/Intro.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import DoctorCards from "../../components/doctorCards/DoctorCards";

import { FaBell } from "react-icons/fa6";
import { BsHeartPulseFill } from "react-icons/bs";
import { FaStethoscope } from "react-icons/fa";
import { RiPsychotherapyFill } from "react-icons/ri";
import { GiBarefoot } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { FaHandHoldingMedical } from "react-icons/fa";

export default function Intro() {
  const [imgNext, setImageNext] = useState(1);
  const [showCarousel, setShowCarousel] = useState(true);

  useEffect(() => {
    // Check if the carousel has been shown before
    const carouselShown = localStorage.getItem("carouselShown");
    if (carouselShown) {
      setShowCarousel(false);
    }

    // Cleanup localStorage on page unload
    const cleanupLocalStorage = () => {
      localStorage.removeItem("carouselShown");
    };

    window.addEventListener("beforeunload", cleanupLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", cleanupLocalStorage);
    };
  }, []);

  const onHandleBtnNext = () => {
    setImageNext((prev) => prev + 1);
    if (imgNext === 2) {
      localStorage.setItem("carouselShown", "true");
      setShowCarousel(false);
    }
  };

  return (
    <>
      <Head>
        <title>Appointment App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="theme-color" content="#1dbab5" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {showCarousel && (
          <div className={styles.carousel}>
            <Image
              width={1000}
              height={1000}
              src={`/${imgNext}.jpeg`}
              alt="image with Doctors"
              priority
            />
            {imgNext === 1 ? (
              <h1>Book your Appointment</h1>
            ) : (
              <h1>Get a prescription from a Doctor</h1>
            )}
            <button className={styles.btnNext} onClick={onHandleBtnNext}>
              Next
            </button>
          </div>
        )}
        {!showCarousel && (
          <div className={styles.userPage}>
            <nav className={styles.nav}>
              <div>
                <h3>Hi user!</h3>
                <p>How are you feeling now?</p>
              </div>
              <div>
                <FaBell />
              </div>
            </nav>
            <div className={styles.boxCard}>
              <div className={styles.textBoxCard}>
                <h2>Stay at Home!</h2>
                <p>
                  Choose among the top doctors and schedule your appointment!
                </p>
                <button>Meet online</button>
              </div>
              <div className={styles.imgBoxCard}></div>
            </div>
            {/* -----OUR SERVICES----- */}
            <div className={styles.nextAppointments}>
              <div className={styles.nav}>
                <div>
                  <h3>Our Services</h3>
                </div>
                <div>
                  <Link href="/doctorList">See more</Link>
                </div>
              </div>
              {/* //Carousel */}
              <div className={styles.icon}>
                <Link href="/doctorList" className={styles.boxIcon}>
                  <BsHeartPulseFill />
                  <p>Cardiologist</p>
                </Link>

                <Link href="/doctorList" className={styles.boxIcon}>
                  <FaStethoscope />
                  <p>Pediatrician</p>
                </Link>

                <Link href="/doctorList" className={styles.boxIcon}>
                  <RiPsychotherapyFill />
                  <p>Psychiatrist</p>
                </Link>

                <Link href="/doctorList" className={styles.boxIcon}>
                  <GiBarefoot />
                  <p>Orthopedic Surgeon</p>
                </Link>

                <Link href="/doctorList" className={styles.boxIcon}>
                  <GiBrain />
                  <p>Neurologist</p>
                </Link>

                <Link href="/doctorList" className={styles.boxIcon}>
                  <FaHandHoldingMedical />
                  <p>Dermatologist</p>
                </Link>
              </div>
            </div>

            {/* //---Next appointments--- */}
            <div className={styles.nextAppointments}>
              <div className={styles.nav}>
                <div>
                  <h3>Next Appointments</h3>
                </div>
                <span>
                  <Link href="/doctorList">See more</Link>
                </span>
              </div>

              <DoctorCards />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
