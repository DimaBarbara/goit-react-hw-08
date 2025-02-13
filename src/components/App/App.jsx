import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'

import styles from "./App.module.css";

const App = () => {
  
  return (
    <div className={styles.div} >
  <h1 className={styles.h1}>Phonebook</h1>
          <ContactForm  />
  <SearchBox  />
          <ContactList />
</div>

  )
}

export default App