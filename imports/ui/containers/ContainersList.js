import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { ContainersCollection } from '/imports/api/containers/containers.js';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export const ContainersList = () => {
  const isLoading = useSubscribe('containers');
  const containers = useFind(() => ContainersCollection.find());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  console.log(containers);
  return (
    <div>
      <h2>Containers List:</h2>
      <ListGroup>
        {containers.map((container) => (
          <ListGroup.Item as="a" className="d-flex justify-content-between align-items-start" key={container._id} href={`/containers/${container._id}`}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{container.containerName}</div>
              {container.containerType}
              <p>{container.containerDescription}</p>
            </div>
            <Badge bg="primary" pill>
              {container.containerCapacity} / {container.containerWeight} kg
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
