import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { OwnersCollection } from '../../api/owners/owners';
import ListGroup from 'react-bootstrap/ListGroup';

export const OwnersList = () => {
  const isLoading = useSubscribe('owners');
  const owners = useFind(() => OwnersCollection.find());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Owners List:</h2>
      <ListGroup>
        {owners.map((owner) => (
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={owner._id}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{owner.ownerName}</div>
              {owner.ownerType}
              <p>{owner.ownerLevel}</p>
            </div>
            <div>
              <p>Balance: {owner.ownerBalance}</p>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
