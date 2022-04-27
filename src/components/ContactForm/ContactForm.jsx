import ButtonInForm from 'components/ButtonInForm';
import Form from 'components/Form';

export default function ContactForm({ onSubmit, isAddItems }) {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <ButtonInForm isAddItems={isAddItems} />
      </Form>
    </>
  );
}
