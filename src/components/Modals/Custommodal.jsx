import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import './modal.css';

const CustomModal = ({
  isOpen,
  onClose,
  title,
  children,
  handleCLick,
  btntext,
  isBtn,
  onBackclick,
  headerclass,
  width,
  size
}) => (
  <Modal size={size || 'md'} style={{ width }} backdrop isOpen={isOpen} centered>
    <ModalHeader
      className={`header2famethod wrapper ${headerclass} justify-content-start mx-2 `}
      toggle={onClose}>
      {onBackclick && (
        <div className="wrapper" onClick={onBackclick}>
          <i className="fa-solid fa-chevron-left" />
          <p className="mb-0"> Go Back </p>
        </div>
      )}
      {title}
    </ModalHeader>
    <ModalBody>{children}</ModalBody>
    {isBtn && (
      <ModalFooter className="footer2famethod">
        <Button className="w-50" color="primary" onClick={handleCLick}>
          {btntext}
        </Button>
      </ModalFooter>
    )}
  </Modal>
);

export default CustomModal;
