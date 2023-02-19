import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { ToastContainer } from 'react-toastify';
import { notificationParams } from 'settings/settings';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: '700' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ textAlign: 'center', fontWeight: '700' }}>Contacts</h2>
      <Filter />
      <div
        style={{
          height: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isLoading && !error && <Loader />}
        {error && <p style={{ textAlign: 'center' }}>{error}</p>}
      </div>

      <ContactList />
      <ToastContainer
        theme="colored"
        autoClose={notificationParams.autoClose}
      />
    </div>
  );
}
