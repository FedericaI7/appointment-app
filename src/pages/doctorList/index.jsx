import styles from "@/styles/DoctorList.module.scss";

import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import DoctorCardsColumn from "@/components/doctorCardsColumn";

export default function DoctorList() {
  return (
    <div className={styles.DoctorList}>
      <nav className={styles.navTitle}>
        <span className={styles.iconBack}>
          <Link href="/intro">
            <IoIosArrowBack />
          </Link>
        </span>
        <div className={styles.titleCenter}>
          <h1>All Doctors</h1>
        </div>
      </nav>

      <DoctorCardsColumn />
    </div>
  );
}
