import React from 'react'
import Contact from '../Contact/Contact';
import styles from "./ContactList.module.css"
import { useSelector } from 'react-redux';

export default function ContactList() {
    const contacts = useSelector(state => state.contacts.items)
    const filter = useSelector(state => state.filter.name)
    const filterData = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  return (
      <ul className={styles.ul} >
          {filterData.map((contact) => (
                  <Contact {...contact} key={contact.id} />
          ))}
      </ul>
  )
}

