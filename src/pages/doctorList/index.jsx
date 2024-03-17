import styles from "@/styles/DoctorList.module.scss";
import DoctorCards from "@/components/doctorCards";

export default function DoctorList() {
  return (
    <div className={styles.DoctorList}>
      <DoctorCards />
      <h1>ciao e benvenuto</h1>
    </div>
  );
}
