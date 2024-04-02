import styles from "../../styles/FormRegister.module.scss";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const FormRegister = () => {
  const [isFormClosed, setIsFormClosed] = useState(false);

  const handleCloseBtn = () => {
    setIsFormClosed(true);
  };

  return (
    <>
      {!isFormClosed && (
        <div className={styles.FormRegister}>
          <form action="" className={styles.form}>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" />
            <label htmlFor="surname">Surname</label>
            <input name="surname" type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" type="email" />
            <label htmlFor="password">Password</label>
            <input name="password" type="password" />
            <button className={styles.btnSignUp}>Sign Up</button>
          </form>
          <button onClick={handleCloseBtn} className={styles.btnClose}>
            <IoClose />
          </button>
        </div>
      )}
    </>
  );
};

export default FormRegister;
