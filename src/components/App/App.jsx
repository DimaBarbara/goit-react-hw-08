import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from "./App.module.css";

const App = () => {
     const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
    const addContact = (newContact) => {
        setContacts((prevContact) => {
            return [...prevContact, newContact]
        })
  }
  const deleteContact = (contactId) => {
    console.log(contactId);
    setContacts((prevContact) => {
      return prevContact.filter(contact => contact.id !== contactId)
    })
}
  const [filter, setFilter] = useState('')

  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    
 useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={styles.div} >
  <h1 className={styles.h1}>Phonebook</h1>
          <ContactForm onAdd={addContact} />
  <SearchBox value={filter} onFilter={setFilter} />
          <ContactList contacts={filterContacts} onDelete={deleteContact} />
</div>

  )
}

export default App