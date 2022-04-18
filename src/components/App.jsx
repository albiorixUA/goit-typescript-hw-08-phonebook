import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  getContacts,
  getFilteredContact,
  filterContact,
  deletedContact,
} from 'redux/contactSlice';

export default function App() {
  const dispatch = useDispatch();
  const contactItems = useSelector(getContacts);
  const filteredItems = useSelector(getFilteredContact);

  const addNewContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contactItems.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.error(`${name} is already in contacts!`);
    }

    return dispatch(addContact(newContact));
  };

  const deleteContact = newContactId => {
    return dispatch(deletedContact(newContactId));
  };

  const changeFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filteredItems.toLowerCase();
    return contactItems.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <Toaster />
      <h2>Contacts</h2>
      <Filter value={filteredItems} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
