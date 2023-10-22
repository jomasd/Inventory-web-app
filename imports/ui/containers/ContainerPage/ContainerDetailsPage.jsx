import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { ContainersCollection } from '../../../api/containers/containers';

// Importing Material Web components
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';

export const ContainerDetailsPage = () => {
  const { containerId } = useParams();

  const container = useTracker(() => {
    return ContainersCollection.findOne(containerId);
  });

  if (!container) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <h2>{container.containerName}</h2>
      <p>Type: {container.containerType}</p>
      <p>Capacity: {container.containerCapacity}</p>
      <p>Weight: {container.containerWeight}</p>
      <p>Description: {container.containerDescription}</p>
      
      <h3>Attributes:</h3>
      <md-list>
        <md-list-item>Brand: {container.containerAttributes.brand}</md-list-item>
        <md-list-item>Model: {container.containerAttributes.model}</md-list-item>
        <md-list-item>Material: {container.containerAttributes.material}</md-list-item>
        <md-list-item>Dimensions: L: {container.containerAttributes.dimensions.length}, W: {container.containerAttributes.dimensions.width}, H: {container.containerAttributes.dimensions.height}</md-list-item>
        <md-list-item>Color: {container.containerAttributes.color}</md-list-item>
        <md-list-item>Warranty: Start: {new Date(container.containerAttributes.warranty.startDate).toLocaleDateString()}, End: {new Date(container.containerAttributes.warranty.endDate).toLocaleDateString()}, Coverage: {container.containerAttributes.warranty.coverage}</md-list-item>
      </md-list>
      
      <md-button label="Edit Container" raised></md-button>
    </div>
  );
};
