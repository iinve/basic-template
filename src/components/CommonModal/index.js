import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Style from "./CommonModal.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import { Spinner } from "react-bootstrap";

const CommonModal = ({ show, handleModal }) => {
  const [loading, setLoading] = useState(true);

  const handleReady = () => {
    setLoading(false);
  };
  return (
    <Modal
      show={show}
      onHide={handleModal}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={Style.modalHeader}>
        <Modal.Title>More designs are available!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={Style.wrapper}>
          {loading && <Spinner animation="border" />}
          <ReactPlayer
            url="https://youtu.be/eDKmY30ICho"
            width="100%"
            onReady={handleReady}
            style={{
              display: loading ? "none" : "block",
            }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className={Style.modalFooter}>
        <button className={`${Style.button} btn `} onClick={handleModal}>
          Cancel
        </button>
        <button className={`${Style.button_main} btn btn-primary`}>
          Create new
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommonModal;
