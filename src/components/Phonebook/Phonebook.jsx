import { ContactForm } from "../ContactForm/ContactForm ";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { Section, Title, ContactsTitle } from "./Phonebook.styled";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading, selectError } from "redux/contacts/selectors";

import { PulseLoader } from "react-spinners";



const Phonebook = () => {

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
      {isLoading && !error && <PulseLoader color="#00BFFF" size={10} />}
      <ContactList />
    </Section>
  );
};

export { Phonebook };
