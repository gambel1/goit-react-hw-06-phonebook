import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import {
  Form,
  FormWrapper,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const shema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  number: yup.number().min(4).required(),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  function handleSubmit(values, { resetForm }) {
    // values.preventDefault();
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={shema}
    >
      <Form autoComplete="off">
        <FormWrapper>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" name="name" id="name" required />
          <ErrorMessage name="name" />
        </FormWrapper>

        <FormWrapper>
          <FormLabel htmlFor="number">Number</FormLabel>
          <FormInput type="tel" name="number" id="number" required />
          <ErrorMessage name="number" />
        </FormWrapper>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
}
