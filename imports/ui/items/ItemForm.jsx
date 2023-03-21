import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


export const ItemForm = () => {
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemWeight, setItemWeight] = useState(0);
  const [itemDescription, setItemDescription] = useState("");
  const [containerId, setContainerId] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [material, setMaterial] = useState("");
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [coverage, setCoverage] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can add your custom code to handle form submission
    console.log("Form submitted!");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <br></br>
    <Button variant="primary" onClick={handleShow}>
        Add Item
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="itemName">
            <Form.Label>Item name:</Form.Label>
            <Form.Control
              type="text"
              value={itemName}
              onChange={(event) => setItemName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="itemType">
            <Form.Label>Item type:</Form.Label>
            <Form.Control
              type="text"
              value={itemType}
              onChange={(event) => setItemType(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="itemWeight">
            <Form.Label>Item weight:</Form.Label>
            <Form.Control
              type="number"
              value={itemWeight}
              onChange={(event) => setItemWeight(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="itemDescription">
            <Form.Label>Item description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={itemDescription}
              onChange={(event) => setItemDescription(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="containerId">
            <Form.Label>Container ID:</Form.Label>
            <Form.Control
              type="text"
              value={containerId}
              onChange={(event) => setContainerId(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="brand">
            <Form.Label>Brand:</Form.Label>
            <Form.Control
              type="text"
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="model">
            <Form.Label>Model:</Form.Label>
            <Form.Control
              type="text"
              value={model}
              onChange={(event) => setModel(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="material">
            <Form.Label>Material:</Form.Label>
            <Form.Control
                type="text"
                value={material}
                onChange={(event) => setMaterial(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="length">
              <Form.Label>Length:</Form.Label>
              <Form.Control
                type="number"
                value={length}
                onChange={(event) => setLength(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="width">
              <Form.Label>Width:</Form.Label>
              <Form.Control
                type="number"
                value={width}
                onChange={(event) => setWidth(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="height">
              <Form.Label>Height:</Form.Label>
              <Form.Control
                type="number"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="color">
              <Form.Label>Color:</Form.Label>
              <Form.Control
                type="text"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="expirationDate">
              <Form.Label>Expiration date:</Form.Label>
              <Form.Control
                type="date"
                value={expirationDate}
                onChange={(event) => setExpirationDate(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Warranty start date:</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="endDate">
              <Form.Label>Warranty end date:</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="coverage">
              <Form.Label>Warranty coverage:</Form.Label>
              <Form.Control
                type="text"
                value={coverage}
                onChange={(event) => setCoverage(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="createdAt">
              <Form.Label>Created at:</Form.Label>
              <Form.Control
                type="date"
                value={createdAt}
                onChange={(event) => setCreatedAt(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="submit">
              <Form.Control variant="primary" type="submit" value="Add item" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
   
    </>
  );
};