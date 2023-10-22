import React, { useState } from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;
// Sample data based on your schema. You should replace this with actual data fetching logic.
const mockData = {
  locations: [
    {
      id: 'loc1',
      name: 'Safe Room',
      containers: [
        {
          id: 'cont1',
          containerName: 'Ammo Box',
          containerType: 'Box',
          containerCapacity: 50,
          containerWeight: 2,
          containerDescription: 'A metal box for ammo storage.',
          containerAttributes: {
            brand: 'BrandA',
            model: 'A-100',
            material: 'Metal',
            dimensions: { length: 15, width: 10, height: 10 },
            color: 'Green',
          },
          items: [
            { id: 'item1', name: '9mm Rounds', quantity: 20 },
            { id: 'item2', name: 'Shotgun Shells', quantity: 15 },
          ],
        },
        // ... more containers
      ],
    },
    // ... more locations
  ],
  // ... other data categories
};

const ItemComponent = ({ item }) => (
  <div>
    {item.name} (Quantity: {item.quantity})
  </div>
);

const ContainerComponent = ({ container }) => (
  <Collapse>
    <Panel header={container.containerName} key={container.id}>
      {container.items.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </Panel>
  </Collapse>
);

const LocationComponent = ({ location }) => (
  <Collapse>
    <Panel header={location.name} key={location.id}>
      {location.containers.map((container) => (
        <ContainerComponent key={container.id} container={container} />
      ))}
    </Panel>
  </Collapse>
);

const InventoryPage = () => {
  // Using state here for the mock data, but you might fetch this data instead.
  const [data, setData] = useState(mockData);

  return (
    <div>
      <h1>Inventory</h1>
      {data.locations.map((location) => (
        <LocationComponent key={location.id} location={location} />
      ))}
    </div>
  );
};

export default InventoryPage;
