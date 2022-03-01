import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { validateName, validateEmail, validateMessage } from "./validation";

function ContactForm() {
  // Name, Email, Message
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Error
  const [errorMessage, setErrorMessage] = useState("");

  // Form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Copy old object, change a key value pair
    const newInput = {
      ...inputFields,
      [name]: value,
    };
    setInputFields(newInput);
  };

  //   Form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate fields
    if (!validateName(inputFields.name)) {
      setErrorMessage("Name required.");
      return;
    }
    if (!validateEmail(inputFields.email)) {
      setErrorMessage("Invalid email address.");
      return;
    }
    if (!validateMessage(inputFields.message)) {
      setErrorMessage("Message field required.");
      return;
    }

    // Clear fields
    setInputFields({
      name: "",
      email: "",
      message: "",
    });
    setErrorMessage("");
  };

  return (
    <div>
      <Container>
        <form className="form">
          <input
            value={inputFields.name}
            className="form-control mb-3"
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            value={inputFields.email}
            className="form-control mb-3"
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={inputFields.message}
            className="form-control mb-3"
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />
          <div>
            <p>{errorMessage}</p>
          </div>
          <button className="btn btn-dark" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
}

export default ContactForm;