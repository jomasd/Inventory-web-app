import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { InventoryCollection } from '../api/Inventory';
import { InventoryItem } from './InventoryItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export const Inventory = () => {
  const isLoading = useSubscribe('inventory');
  const items = useFind(() => InventoryCollection.find());

  if(isLoading()) {
    return <div>Loading...</div>;
  }
  //name, category, serialNumber, quantity, createdAt: new Date()
  console.log(items);
  return (
    <div>
      <h2>Inventory List:</h2>
      <ListGroup>{items.map(
        item => 
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={item._id}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.name}</div>
              {item.category}
            </div>
            <Badge bg="primary" pill>{item.quantity}</Badge>
          </ListGroup.Item>
      )}</ListGroup>
    </div>
  );
};
