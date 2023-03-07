import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import styles from './app.module.scss';

import { fetchAllContacts, fetchAddContact, fetchDeleteContact } from '../redux/contacts/contacts-operations';

import { setFilter } from '../redux/filter/filter-slice';

import { getAllContacts, getFilteredContacts } from '../redux/contacts/contacts-selectors';
import { getFilter } from '../redux/filter/filter-selectors';

const App = () => {
  const contacts = useSelector(getAllContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  console.log("App ", contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const submitHandler = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const removeHandler = id => {
    dispatch(fetchDeleteContact(id));
  };

  const filterHandler = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={submitHandler} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={filterHandler} />
      <ContactList contacts={filteredContacts} onRemoveContact={removeHandler} />
    </div>
  );
}

export default App;