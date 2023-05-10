// import { getContacts } from 'redux/selectors';
// import { addContact } from 'redux/contactsSlice';
// import { useSelector, useDispatch } from 'react-redux';
// import { Formik, ErrorMessage } from 'formik';
// import {
//   Form,
//   FormWrapper,
//   FormLabel,
//   FormInput,
//   FormButton,
// } from './ContactForm.styled';
// import * as yup from 'yup';
// import { nanoid } from 'nanoid';

// const initialValues = {
//   id: '',
//   name: '',
//   number: '',
// };

// const shema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2, 'Too Short!')
//     .max(70, 'Too Long!')
//     .required('Required'),
//   number: yup.number().min(4).required(),
// });

// export default function ContactForm() {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);

//   function handleSubmit(values, { resetForm }) {
//     // values.preventDefault();
//     const newContact = {
//       id: nanoid(),
//       name: values.name,
//       number: values.number,
//     };

//     if (
//       contacts.find(
//         contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//       )
//     ) {
//       return alert(`${newContact.name} is already in contacts`);
//     }

//     dispatch(addContact(newContact));
//     resetForm();
//   }

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={shema}
//     >
//       <Form autoComplete="off">
//         <FormWrapper>
//           <FormLabel htmlFor="name">Name</FormLabel>
//           <FormInput type="text" name="name" id="name" required />
//           <ErrorMessage name="name" />
//         </FormWrapper>

//         <FormWrapper>
//           <FormLabel htmlFor="number">Number</FormLabel>
//           <FormInput type="tel" name="number" id="number" required />
//           <ErrorMessage name="number" />
//         </FormWrapper>
//         <FormButton type="submit">Add contact</FormButton>
//       </Form>
//     </Formik>
//   );
// }
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { customAlphabet } from 'nanoid';
import {
  Form,
  FormWrapper,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';

const nanoid = customAlphabet('1234567890', 3);

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.number().min(4).required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert.error(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <FormWrapper>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <FormInput name="name" type="text" id="name" />
            <ErrorMessage name="name" component="div" />
          </FormWrapper>

          <FormWrapper>
            <FormLabel htmlFor="number">Number:</FormLabel>
            <FormInput name="number" type="tel" id="number" />
            <ErrorMessage name="number" component="div" />
          </FormWrapper>

          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </>
  );
}
