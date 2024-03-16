import styles from "@/styles/doctorCard.module.scss";
import Image from "next/image";

const DoctorCards = () => {
  return (
    <div className={styles.DoctorCards}>
      <div>
        <Image src="/2.svg" width={100} height={100} alt="doctor picture" />
      </div>

      <div>
        <h3>Nome dott</h3>
        <p>lorem Ipsum</p>
        <p>Data casuale</p>
      </div>
    </div>
  );
};

export default DoctorCards;
