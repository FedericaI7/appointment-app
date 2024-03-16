import styles from "@/styles/doctorCard.module.scss";

import Image from "next/image";

const DoctorCards = ({ userData }) => {
  const { results } = userData;
  return (
    <div className={styles.DoctorCards}>
      {results?.map((el, index) => {
        return (
          <div className={styles.boxCard} key={index}>
            <div>
              <div>
                <Image
                  src={el.picture?.medium}
                  width={100}
                  height={100}
                  alt="doctor picture"
                />
              </div>
            </div>
            <div>
              <h3>{`Doct. ${el.name?.first} ${el.name?.last}`}</h3>
              <p>lorem Ipsu</p>
              <p>Data casuale</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorCards;
