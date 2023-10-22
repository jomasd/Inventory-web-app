import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { ContainersCollection } from '/imports/api/containers/containers.js';
import ContainersList from '../ContainersList';


export const ContainersPage = () => {
  const isLoading = useSubscribe('containers');
  const containers = useFind(() => ContainersCollection.find());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Containers</h1>
      <ContainersList containers={containers} />
    </>
  );
};
