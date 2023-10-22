import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { ContainersCollection } from '../../../api/containers/containers';

// rewrite export to containe all data schema from the api file 
// and then use the data in the return statement
// use the data in the return statement to display the data on the page


export const ContainerPage = () => {
 const { containerId } = useParams();

  const container = useTracker(() => {
    return ContainersCollection.findOne(containerId);
  });
  if (!container) {
    return <div>Loading...</div>;
  }
  console.log(container);
  return (
    <>
    <div>
      <h2>{container.containerName}</h2>
      <p>Type: {container.containerType}</p>
      <p>Capacity: {container.containerCapacity}</p>
      <p>Weight: {container.containerWeight}</p>
      <p>Description: {container.containerDescription}</p>
      <p>Attributes:</p>
      <ul>
        <li>Brand: {container.containerAttributes.brand}</li>
        <li>Model: {container.containerAttributes.model}</li>
        <li>Material: {container.containerAttributes.material}</li>
        <li>
          Dimensions:
          <ul>
            <li>Length: {container.containerAttributes.dimensions.length}</li>
            <li>Width: {container.containerAttributes.dimensions.width}</li>
            <li>Height: {container.containerAttributes.dimensions.height}</li>
          </ul>
        </li>
        <li>Color: {container.containerAttributes.color}</li>
        <li>
          Warranty:
          <ul>
            <li>Start Date: {container.containerAttributes.warranty.startDate.toLocaleDateString()}</li>
            <li>End Date: {container.containerAttributes.warranty.endDate.toLocaleDateString()}</li>
            <li>Coverage: {container.containerAttributes.warranty.coverage}</li>
          </ul>
        </li>
      </ul>
      
    </div>
    </>
  );
};
