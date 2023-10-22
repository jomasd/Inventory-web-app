// LocationDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Row, Col, Spin, Statistic } from 'antd';

// Mock data for the location details and containers within that location.
const mockLocationDetails = {
  id: '1',
  name: 'Location 1',
  description: 'Description for Location 1',
  totalRooms: 5,
  containerTotal: 15,
  itemTotal: 100,
  // ... other properties
};

const mockContainers = [
  {
    id: '1',
    name: 'Container 1',
    description: 'This is a very secure container.',
    // ... other properties
  },
  {
    id: '2',
    name: 'Container 2',
    description: 'This container is not as secure.',
    // ... other properties
  },
  // ... more containers
];

const LocationDetailsPage = () => {
  const [locationDetails, setLocationDetails] = useState(null);
  const [containers, setContainers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { locationId } = useParams(); // get the location ID from the URL

  useEffect(() => {
    // Here you would fetch the actual data for location details and containers.
    // We're using a timeout to simulate network request delay.
    setTimeout(() => {
      // Setting mock data for demonstration purposes
      setLocationDetails(mockLocationDetails);
      setContainers(mockContainers);
      setLoading(false);
    }, 1000);
  }, [locationId]);

  if (loading) {
    return <Spin />;
  }

  return (
    <div>
      {/* Display location details */}
      <h1>{locationDetails.name}</h1>
      <p>{locationDetails.description}</p>
      <Statistic title="Total Rooms" value={locationDetails.totalRooms} />
      <Statistic title="Total Containers" value={locationDetails.containerTotal} />
      <Statistic title="Total Items" value={locationDetails.itemTotal} />

      <Row gutter={16} style={{ marginTop: '20px' }}>
        {/* Iterate over containers in this location */}
        {containers.map((container) => (
          <Col span={8} key={container.id}>
            <Link to={`/locations/${locationId}/containers/${container.id}`}>
              <Card title={container.name} bordered={false} hoverable>
                <p>{container.description}</p>
                {/* Display any other relevant information */}
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LocationDetailsPage;
