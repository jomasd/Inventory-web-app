// LocationsPage.js
import React, { useEffect, useState } from 'react';
import { Row, Spin } from 'antd';
import LocationsList from '../LocationsList';

// Mock data for the locations. Each location has stats.
const mockLocationsData = [
  {
    id: '1',
    name: 'Location 1',
    description: 'Description for Location 1',
    totalRooms: 5,
    containerTotal: 15,
    itemTotal: 100,
    // ... other properties
  },
  {
    id: '2',
    name: 'Location 2',
    description: 'Description for Location 1',
    totalRooms: 5,
    containerTotal: 15,
    itemTotal: 100,
    // ... other properties
  },
  // ... other locations
];

export const LocationsPage = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a data fetch with a timeout
    setTimeout(() => {
      setLocations(mockLocationsData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Spin />;
  }

  return (
    <Row gutter={16}>
      <LocationsList locations={locations} />
    </Row>
  );
};


