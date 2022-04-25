import { ItemList, ListOfContacts, ContactDetails } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useDeleteContactsMutation } from 'redux/contactsSlice';
import { IoIosTrash } from 'react-icons/io';
import { AiFillEdit } from 'react-icons/ai';
import { iconSize } from 'constants';
import { Spiner } from 'utils/Spiner';

const ContactList = ({ contacts }) => {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();
  return (
    <>
      {contacts.length > 0 ? (
        <ListOfContacts>
          {contacts.map(({ id, name, number }) => (
            <ItemList key={id}>
              <ContactDetails>
                {name}: {number}
              </ContactDetails>
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => deleteContacts(id)}
              >
                {isDeleting ? <Spiner /> : <IoIosTrash size={iconSize.md} />}
              </button>
              <button type="button">
                <AiFillEdit size={iconSize.md} />
              </button>
            </ItemList>
          ))}
        </ListOfContacts>
      ) : (
        <p>Contact list is empty</p>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
