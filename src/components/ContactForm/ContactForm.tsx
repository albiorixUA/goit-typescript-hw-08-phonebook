import ButtonInForm from 'components/ButtonInForm';
import Form from 'components/Form';
import React from 'react';
import { ContactFormProps } from 'types/componentTypes';

export default function ContactForm({
  onSubmit,
  isAddItems,
}: ContactFormProps) {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <ButtonInForm isAddItems={isAddItems} />
      </Form>
    </>
  );
}
