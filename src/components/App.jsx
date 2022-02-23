import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { PhoneBookTitle } from "./PhoneBookTitle/PhoneBookTitle";
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsTitle } from "./ContactsTitle/ContactsTitle";
import { Filter } from './Filter/Filter';
import { addContact, removeContact, filter } from "redux/store";

export const App = () => {

  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const formSubmitHandler = ({name, number}) => {
    const alreadyInList = contacts.find(contact => contact.name === name);

    if (alreadyInList !== undefined) {
        alert(`${name} is already in contacts`);

        return;
    };

     const contact = {
      id: nanoid(),
      name,
      number
    };

    dispatch(addContact(contact));
  };

  const changeSearchFilter = event => {
    dispatch(filter(event.currentTarget.value))
  };

  const getVisibleContacts = () => {
    
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  const deleteContact = contact => {
    dispatch(removeContact(contact));
  };

  /* useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const contactsParsed = JSON.parse(contacts);

    if (contactsParsed) {
      setContacts(contactsParsed);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]); */

      const searchContact = getVisibleContacts();

      return (
        <div>
          <PhoneBookTitle title="Phone book"/>
          <PhoneBookForm onSubmit={formSubmitHandler}/>
          <ContactsTitle title="Contacts"/>
          <Filter value={filterValue} onChange={changeSearchFilter}/>
          <ContactsList contacts={searchContact} onDeleteContact={deleteContact}/>
        </div>
    );

}
