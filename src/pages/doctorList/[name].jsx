import styles from "@/styles/DoctorList.module.scss";

import { userData } from "@/API/Apicall";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function DoctorListDynamic() {

  return (
    <div className={styles.DoctorListDynamic}>
      <h1>benevenuto </h1>
    </div>
  );
}
