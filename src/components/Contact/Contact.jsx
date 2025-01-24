import React from 'react'
import styles from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";






const Contact = ({data: {id, name, number}, onDelete}) => {

  return (
    <div className={styles.div}>
  
      <p className={styles.p} ><FaUser className={styles.icon} />{name}</p>
      
          <p className={styles.p}><FaPhone className={styles.icon} />{number }</p>
          <button className={styles.button} onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default Contact