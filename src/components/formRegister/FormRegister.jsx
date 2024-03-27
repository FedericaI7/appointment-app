import styles from "@/styles/FormRegister.module.scss";

import { IoClose } from "react-icons/io5";

const FormRegister = () => {
  return (
    <div className={styles.FormRegister}>
      <form action="" className={styles.form}>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" />
        <label htmlFor="name">Surname</label>
        <input name="name" type="text" />
        <label htmlFor="name">Email</label>
        <input name="name" type="email" />
        <label htmlFor="name">Password</label>
        <input name="name" type="password" />
        <button className={styles.btnSignUp}>Sign Up</button>
      </form>
      <button className={styles.btnClose}>
        <IoClose />
      </button>
    </div>
  );
};
export default FormRegister;
