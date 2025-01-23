import React from 'react'
import styles from "./Contact.module.css";

const Contact = ({data: {id, name, number}, onDelete}) => {

  return (
      <div className={styles.div}>
          <p className={styles.p} >{name }</p>
          <p className={styles.p}>{number }</p>
          <button className={styles.button} onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default Contact