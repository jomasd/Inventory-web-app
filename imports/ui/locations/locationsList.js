import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { LocationsCollection } from '/imports/api/locations/locations.js';
import ListGroup from 'react-bootstrap/ListGroup';

export const LocationsList = () => {
  const isLoading = useSubscribe('locations');
  const locations = useFind(() => LocationsCollection.find());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Locations List:</h2>
      <ListGroup>
        {locations.map((location) => (
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={location._id}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{location.locationName}</div>
              {location.locationType}
              <p>{location.locationDescription}</p>
            </div>
            <div>
              Building: {location.building}, Room: {location.room}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
