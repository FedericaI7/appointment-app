import styles from "@/styles/DoctorList.module.scss";

import Doctor from "@/components/doctor";

export default function DoctorListDynamic() {
  return (
    <div className={styles.DoctorListDynamic}>
      <Doctor />
    </div>
  );
}
