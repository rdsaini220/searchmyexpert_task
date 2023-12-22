import React from 'react'
import Modal from 'react-bootstrap/Modal';
import FormCard from './FormCard';


export const ModelCard = ({ isOpen, setOpen, formData={}, setFormData, handleSubmit  }) => {
  const handleClose = () => {
    setFormData({})
    setOpen(false)
  }
  return (
    <Modal
      show={isOpen}
      onHide={() => handleClose()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {formData?.id ? `Update employiee Name - ${formData?.name}` : "Add Employiee"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <FormCard
            formData={formData}
            setFormData={setFormData}
            handleSubmitForm={handleSubmit}
          />          
      </Modal.Body>
    </Modal>
  )
}

