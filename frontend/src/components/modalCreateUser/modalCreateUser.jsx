import "./modalCreateUser.css";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function App(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="hearder-modal"
      dialogClassName="app"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="hearder-modal">
          <h2>Hearder Modal</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Modal Body</h4>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          accusamus magnam sint aperiam labore nesciunt? Aut illo ipsa qui
          consequatur unde. Aperiam accusantium vel quos magnam tenetur eum
          officiis eius!
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalCreaAteUser() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="primary"
        className="botao-teste"
        onClick={() => setModalShow(true)}
      >
        Botão Abrir Modal
      </Button>

      <App show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ModalCreaAteUser;
