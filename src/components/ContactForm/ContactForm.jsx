import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  MainForm,
  Label,
  InputForm,
  ButtonAdd,
  ErrorText,
} from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().min(8).positive().required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <MainForm autoComplete="off">
        <Label htmlFor="name">Name</Label>
        <InputForm name="name" type="text" placeholder="Enter name" />
        <FormError name="name" />
        <Label htmlFor="number">Number</Label>
        <InputForm name="number" type="tel" placeholder="Enter phone number" />
        <FormError name="name" />
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </MainForm>
    </Formik>
  );
}
