import React from "react";
import { Button, Modal } from "react-bootstrap";
// import { useDispatch } from "react-redux";
import firebase from "../firebase/config";

const User = (props) => {
  const user = props.user;

  // const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);

  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    let updatedUser = {
        id: user.id,
        name: name,
        email: email,
    };

    firebase.firestore().collection("users").doc(user.id).update(updatedUser)

    // dispatch(editUserAction(user.id, updatedUser));

    handleClose();
  };

const handleDelete = () => {
  firebase.firestore().collection("users").doc(user.id).delete()
}

  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <Button variant="outline-info" onClick={() => setShow(true)}>Edit</Button>
        <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>
         Name: <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          </h5>

          <h5>
          Email: <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          </h5>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <hr />
    </>
  );
};

export default User;
