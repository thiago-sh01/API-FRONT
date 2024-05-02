import "./modalCreateUser.css";
import ButtonModal from "../modalButton/modalButton";
import React from "react";
import { TextField } from "@mui/material";

function ModalCreateUser() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (

    <div>
    <button onClick={openModal}>Abrir Modal</button>
    <ButtonModal isOpen={isOpen} onClose={closeModal}>
      <h2>Meu Formulário</h2>
      <form>
        <label>
          Nome:
          <input type="text" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </ButtonModal>
  </div>
  )
}

export default ModalCreateUser;
