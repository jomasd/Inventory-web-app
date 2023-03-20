import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const InventoryItem = ({ item }) => {
    const [itemName, setItemName] = useState(item.name);
    const [itemQuantity, setItemQuantity] = useState(item.quantity);
    return (
        <Card className="mb-3">
        <Card.Body>
            <>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Quantity: {item.quantity}</Card.Text>
            </>
        </Card.Body>
        </Card>
    );
};

export default InventoryItem;