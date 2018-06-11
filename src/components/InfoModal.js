import React from "react";
import Modal from "react-modal";

const InfoModal = (props) => (
    <Modal
        isOpen={!!props.message}
        onRequestClose={props.handleClose}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Message</h3>
        <p className="modal__body">{props.message}</p>
        <button className="button modal__confirm" onClick={props.handleClose}>OK</button>
    </Modal>
);

export { InfoModal as default };