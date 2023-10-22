import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { ContainersCollection } from '/imports/api/containers/containers.js';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Typography } from '@mui/material';

export const ContainersList = () => {
  const isLoading = useSubscribe('containers');
  const containers = useFind(() => ContainersCollection.find());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h2">Containers List:</Typography>
      <List>
        {containers.map((container) => (
          <ListItem button component="a" href={`/containers/${container._id}`} key={container._id}>
            <ListItemText
              primary={container.containerName}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    {container.containerType}
                  </Typography>
                  {container.containerDescription}
                </>
              }
            />
            <ListItemSecondaryAction>
              <Typography variant="subtitle1">
                {container.containerCapacity} / {container.containerWeight} kg
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
