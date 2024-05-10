import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import Loader from '../Loader/Loader';
import css from './App.module.css';
import { fetchContacts } from '../../redux/contactsOps';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      {isLoading && <Loader />}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
