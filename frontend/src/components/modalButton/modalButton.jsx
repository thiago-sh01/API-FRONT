import "./modalButton.css";
import React from "react";

const ModalButton = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  console.log(isOpen);
  return (
    <>
      <button className="btn-close" onClick={onClose}>
        Fechar
      </button>
      {children}
    </>
  );
};

export default ModalButton;
