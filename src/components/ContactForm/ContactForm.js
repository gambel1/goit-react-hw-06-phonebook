import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { FormContainer, FormWrapper, FormLabel, FormInput, FormButton } from './ContactForm.styled';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const schema = yup.object().shape({
  name: yup.string().min(2).max(70).required(),
  number: yup.number().min(4).required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  function handleSubmit(values, { resetForm }) {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    if (contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      return Notify.failure(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));
    resetForm();
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
        <FormContainer>
          <FormWrapper>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <FormInput name="name" type="text" id="name" />
            <ErrorMessage name="name" />
          </FormWrapper>

          <FormWrapper>
            <FormLabel htmlFor="number">Number:</FormLabel>
            <FormInput name="number" type="tel" id="number" />
            <ErrorMessage name="number" />
          </FormWrapper>

          <FormButton type="submit">Add contact</FormButton>
        </FormContainer>
      </Formik>
    </>
  );
}
