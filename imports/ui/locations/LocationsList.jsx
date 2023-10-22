// LocationsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Statistic } from 'antd';

const LocationsList = ({ locations }) => {
  return (
    <>
      {locations.map((location) => (
        <Col span={8} key={location.id}>
          <Link to={`/locations/${location.id}`}>
            <Card
              title={location.name}
              bordered={false}
              hoverable
            >
              <p>{location.description}</p>
              <Statistic title="Total Rooms" value={location.totalRooms} />
              <Statistic title="Total Containers" value={location.containerTotal} />
              <Statistic title="Total Items" value={location.itemTotal} />
            </Card>
          </Link>
        </Col>
      ))}
    </>
  );
};

export default LocationsList;
