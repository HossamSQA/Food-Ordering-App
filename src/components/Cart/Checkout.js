import React, { useRef, useState } from "react";
import { Alert, Box } from "@mui/material";
import { Button, Form } from "react-bootstrap";

const isEmpty = (value) => value.trim() === "";
const isElevenChars = (value) => value.trim().length === 11;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    phone: true,
    address: true,
    city: true,
  });

  let nameInputRef = useRef();
  let phoneInputRef = useRef();
  let addressInputRef = useRef();
  let cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    let enteredName = nameInputRef.current.value;
    let enteredPhone = phoneInputRef.current.value;
    let enteredAddress = addressInputRef.current.value;
    let enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPhoneIsValid = isElevenChars(enteredPhone);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);

    const formIsValid =
      enteredNameIsValid &&
      enteredPhoneIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid;

    setFormInputsValidity({
      name: enteredNameIsValid,
      phone: enteredPhoneIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
    });

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      phone: enteredPhone,
      address: enteredAddress,
      city: enteredCity,
    });

    if (formIsValid) {
      onClearHandler();
      props.onCancel();
    }
  };

  const onClearHandler = () => {
    nameInputRef.current.value = "";
    phoneInputRef.current.value = "";
    addressInputRef.current.value = "";
    cityInputRef.current.value = "";
  };

  return (
    <Form onSubmit={confirmHandler}>
      <Form.Group className="mb-2" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Name"
          ref={nameInputRef}
        />
        {!formInputsValidity.name && (
          <Alert severity="error">Please enter a valid name!</Alert>
        )}
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Phone Number"
          ref={phoneInputRef}
        />
        {!formInputsValidity.phone && (
          <Alert severity="error">Please enter a valid phone number!</Alert>
        )}
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Address"
          ref={addressInputRef}
        />
        {!formInputsValidity.address && (
          <Alert severity="error">Please enter a valid Address</Alert>
        )}
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicCity">
        <Form.Label>City, Country</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your City and Country Names"
          ref={cityInputRef}
        />
        {!formInputsValidity.city && (
          <Alert severity="error">Please enter a valid city</Alert>
        )}
      </Form.Group>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button variant="success" type="submit" onClick={() => {}}>
          Confirms
        </Button>

        <Button variant="danger" type="button" onClick={props.onCancel}>
          Cancel
        </Button>
      </Box>
    </Form>
  );
};

export default Checkout;
