import { Modal } from 'react-bootstrap';
import { ButtonModal } from './EditContactModal.styled';
import Form from 'components/Form';
import React from 'react';
import { EditContactModalProps } from 'types/componentTypes';

const EditContactModal: React.FC<EditContactModalProps> = ({
  hide,
  onSubmit,
}) => {
  return (
    <>
      <Modal show onHide={hide} size="sm" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit} toggleModal={hide}>
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
};
export default EditContactModal;
