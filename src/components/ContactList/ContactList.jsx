import { List } from "./ContactList.styled";

import { useSelector } from "react-redux";
import { selectFilteredContacts } from "redux/contacts/selectors";

import { Contact } from "components/Contact/Contact";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ name, phone, _id: id, favorite }) => (
        <Contact
          key={id}
          name={name}
          phone={phone}
          id={id}
          favorite={favorite}
        />
      ))}
    </List>
  );
};

export { ContactList };
