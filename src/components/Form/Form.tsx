import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import React from 'react';
import { FormProps, Values } from 'types/componentTypes';

import * as yup from 'yup';
import {
  MainForm,
  Label,
  InputName,
  InputNumber,
  ErrorText,
} from './Form.styled';

const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
  toggleModal,
  initialValues,
}) => {
  const defaultInitialValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().min(8).positive().required(),
  });

  const handleSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
    onSubmit(values);
    helpers.resetForm();
    toggleModal?.();
  };

  const FormError = ({ name }: any) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  return (
    <Formik
      initialValues={initialValues ?? defaultInitialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <MainForm autoComplete="off">
        <Label htmlFor="name">Name</Label>
        <InputName name="name" type="text" placeholder="Enter name" />
        <FormError name="name" />
        <Label htmlFor="number">Number</Label>
        <InputNumber
          name="number"
          type="tel"
          placeholder="Enter phone number"
        />
        <FormError name="number" />
        {children}
      </MainForm>
    </Formik>
  );
};

export default Form;
