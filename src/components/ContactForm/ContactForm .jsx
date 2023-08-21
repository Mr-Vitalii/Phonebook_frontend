import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  Button,
  ContactsForm,
  FormError,
  Input,
  InputContainer,
} from "./ContactForm .styled";



const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { name,  number } = data;

    if (contacts.some((contact) => contact.name === name)) {
      toast.error(`${name} is already in contacts`, {
        duration: 3000,
      });
      return;
    }
    if (contacts.some((contact) => contact.number === number)) {
      toast.error(`Number ${number} is already in contacts`, {
        duration: 1500,
      });
      return;
    }

    dispatch(addContact(data));
    reset();
  };

  return (
    <ContactsForm onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <label>
          Name:
          <Input
            type="text"
            {...register("name", {
              required: true,
              pattern: /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/,
            })}
          />
          {errors.name && (
            <FormError>
              Name may contain only letters, apostrophe, dash and spaces.
            </FormError>
          )}
        </label>
      </InputContainer>
      <InputContainer>
        <label>
          Email:
          <Input
            type="text"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
          />
          {errors.email && (
            <FormError>
              Invalid email address. Email examples:
              john.doe@example.com, jane_doe123@example.co.uk
            </FormError>
          )}
        </label>
      </InputContainer>
      <InputContainer>
        <label>
          Phone:
          <Input
            type="tel"
            {...register("number", {
              required: true,
              pattern:
                /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
            })}
          />
          {errors.number && (
            <FormError>
              Phone number must be digits and can contain spaces, dashes,
              parentheses and can start with +
            </FormError>
          )}
        </label>
      </InputContainer>
      <Button type="submit">Add contact</Button>
    </ContactsForm>
  );
};

export { ContactForm };
