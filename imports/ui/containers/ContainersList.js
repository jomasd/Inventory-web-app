// ContainersList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Statistic } from 'antd';

const ContainersList = ({ containers }) => {
  return (
    <Row gutter={16}>
      {containers.map((container) => (
        <Col span={8} key={container._id}>
          <Link to={`/containers/${container._id}`}>
            <Card 
              title={container.containerName} 
              bordered={false} 
              hoverable
            >
              <p>{container.description}</p>
              <Statistic title="Items Count" value={container.itemsCount} />
              <Statistic title="Capacity" value={container.containerCapacity} />
              <Statistic title="Weight Capacity" value={`${container.containerWeight} kg`} />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ContainersList;
