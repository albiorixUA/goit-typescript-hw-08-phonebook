import toast, { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import {
  useFetchContactsQuery,
  useCreacteContactMutation,
} from '../redux/contactsSlice';
import { useState } from 'react';
import { GlobalLoader } from 'utils/Skeleton';

export default function App() {
  const [filteredItems, setFilteredItems] = useState('');

  const { data } = useFetchContactsQuery();
  const [creacteContact, { isLoading }] = useCreacteContactMutation();

  const addNewContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
    };
    if (
      data.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      return toast.error(`${name} is already in contacts!`);
    }

    return creacteContact(newContact);
  };

  const changeFilter = e => {
    setFilteredItems(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filteredItems.toLowerCase();
    return data.filter(el => el.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} isAddItems={isLoading} />
      <Toaster />
      <h2>Contacts</h2>
      <Filter value={filteredItems} onChange={changeFilter} />
      {data ? (
        <ContactList contacts={getVisibleContacts()} />
      ) : (
        <GlobalLoader />
      )}
    </div>
  );
}
