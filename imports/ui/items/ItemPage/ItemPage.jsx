import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { ItemsCollection } from '../../../api/items/items';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export const ItemPage = () => {
 const { itemId } = useParams();

  const item = useTracker(() => {
    return ItemsCollection.findOne(itemId);
  });
  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <Container>
      <Row>
        <Col>
          <Card  className="text-center">
            <Card.Header as="h5">Item</Card.Header>
            <Card.Body>
              <Card.Title>{item.itemName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{item.itemType}</Card.Subtitle>
              <Card.Text>{item.itemDescription}</Card.Text>
              {item.itemAttributes && (
                <div>
                  <h5>Item Attributes</h5>
                  <p>Brand: {item.itemAttributes.brand}</p>
                  <p>Model: {item.itemAttributes.model}</p>
                  <p>Material: {item.itemAttributes.material}</p>
                  <p>Dimensions: {item.itemAttributes.dimensions.length} x {item.itemAttributes.dimensions.width} x {item.itemAttributes.dimensions.height}</p>
                  <p>Color: {item.itemAttributes.color}</p>
                  {item.itemAttributes.expirationDate && (
                    <p>Expiration Date: {item.itemAttributes.expirationDate.toLocaleDateString()}</p>
                  )}
                  {item.itemAttributes.warranty && (
                    <div>
                      <p>Warranty</p>
                      <p>Start Date: {item.itemAttributes.warranty.startDate.toLocaleDateString()}</p>
                      <p>End Date: {item.itemAttributes.warranty.endDate.toLocaleDateString()}</p>
                      <p>Coverage: {item.itemAttributes.warranty.coverage}</p>
                    </div>
                  )}
                </div>
              )}
              {item.container && (
                <div>
                  <h5>Container</h5>
                  <p>ID: {item.container.id}</p>
                </div>
              )}
              <Button variant="danger" >Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};
