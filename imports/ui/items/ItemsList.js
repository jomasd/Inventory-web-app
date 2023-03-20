import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { ItemsCollection } from '/imports/api/items/items.js';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export const ItemsList = () => {
  const isLoading = useSubscribe('items');
  const items = useFind(() => ItemsCollection.find());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  console.log(items);
  return (
    <div>
      <h2>Items List:</h2>
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={item._id}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.itemName}</div>
              {item.itemType}
              <p>{item.itemDescription}</p>
            </div>
            <Badge bg="primary" pill>
              {item.itemWeight} kg
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
