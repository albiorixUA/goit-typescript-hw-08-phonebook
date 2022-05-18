import toast, { Toaster } from 'react-hot-toast';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import {
  useFetchContactsQuery,
  useCreacteContactMutation,
  useUpdateContactMutation,
} from '../redux/contactsAPI';

import { useState } from 'react';
import { GlobalLoader } from 'utils/Skeleton';
import UseModal from 'utils/UseModal';
import EditContactModal from 'components/Modal/EditContactModal';
import React from 'react';
import { Values } from 'types/componentTypes';

export default function App() {
  const [filteredItems, setFilteredItems] = useState('');
  const [contactId, setConatctId] = useState('');
  const { isShowing, toggle } = UseModal();
  const { data } = useFetchContactsQuery(null);
  const [creacteContact, { isLoading }] = useCreacteContactMutation();
  const [updateContacts] = useUpdateContactMutation();

  const addNewContact = ({ name, number }: Values) => {
    const newContact = {
      name,
      number,
    };
    if (
      data.some(
        (contact: { name: string }) =>
          contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.error(`${name} is already in contacts!`);
    }

    return creacteContact(newContact);
  };

  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredItems(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filteredItems.toLowerCase();
    return data.filter((el: { name: string }) =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const getContactId = (id: React.SetStateAction<string>) => {
    setConatctId(id);
  };

  const updateContact = (contact: Values) => {
    const newUpdateContact = { contactId, ...contact };
    updateContacts(newUpdateContact);
  };

  return (
    <div>
      {isShowing && <EditContactModal hide={toggle} onSubmit={updateContact} />}
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} isAddItems={isLoading} />
      <Toaster />
      <h2>Contacts</h2>
      <Filter value={filteredItems} onChange={() => changeFilter} />
      {data ? (
        <ContactList
          contacts={getVisibleContacts()}
          onEdit={toggle}
          getContactId={getContactId}
        />
      ) : (
        <GlobalLoader />
      )}
    </div>
  );
}
