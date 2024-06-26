import styles from "../../styles/DoctorList.module.scss";
import Head from "next/head";
import Doctor from "../../components/doctor";

export default function DoctorListDynamic() {
  return (
    <>
      <Head>
        <title>Appointment App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="theme-color" content="#1dbab5" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.DoctorListDynamic}>
        <Doctor />
      </div>
    </>
  );
}
