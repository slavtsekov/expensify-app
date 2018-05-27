import React from "react";
import Modal from "react-modal";

const DeleteModal = (props) => (
    <Modal
        isOpen={props.isOpen}
        onRequestClose={props.handleDecline}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Delete</h3>
        <p className="modal__body">Are you sure you want to delete the selected expense?</p>
        <button className="button modal__confirm" onClick={props.handleAccept}>OK</button>
        <button className="button button--secondary" onClick={props.handleDecline}>Cancel</button>
    </Modal>
);

export { DeleteModal as default };