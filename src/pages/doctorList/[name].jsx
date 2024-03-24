import styles from "@/styles/DoctorList.module.scss";

import Doctor from "@/components/doctor";

import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

export default function DoctorListDynamic() {
  return (
    <div className={styles.DoctorListDynamic}>
      <Doctor />
    </div>
  );
}
