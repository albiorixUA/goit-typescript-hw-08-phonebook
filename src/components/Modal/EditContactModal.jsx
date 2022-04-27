import { Modal } from 'react-bootstrap';
import { ButtonModal } from './EditContactModal.styled';
import Form from 'components/Form';

export default function EditContactModal({
  isShowing,
  hide,
  onSubmit,
  isLoading,
}) {
  return (
    <>
      <Modal
        show={isShowing && !isLoading}
        onHide={hide}
        size="sm"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <ButtonModal variant="secondary" onClick={hide}>
              Close
            </ButtonModal>
            <ButtonModal variant="primary" type="submit">
              Edit
            </ButtonModal>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
