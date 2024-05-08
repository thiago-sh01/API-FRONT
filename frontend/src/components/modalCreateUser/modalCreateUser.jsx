import "./modalCreateUser.css";
import ModalButton from "../modalButton/modalButton";
import React from "react";
import { TextField } from "@mui/material";

function ModalCreateUser() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (

    <div className="modal">
    <button className="btn-open" onClick={openModal}>Abrir Modal</button>
    <ModalButton isOpen={isOpen} onClose={closeModal}>
      <h2>Meu Formulário</h2>
      <form>
        <label>
          Nome:
          <input type="text" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </ModalButton>
  </div>
  )
}

export default ModalCreateUser;
