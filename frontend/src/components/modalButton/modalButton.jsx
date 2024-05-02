import "./modalButton.css";
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;


  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose}>Fechar</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;