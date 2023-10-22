// ItemsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Statistic } from 'antd';

const ItemsList = ({ items }) => {
  return (
    <Row gutter={16}>
      {items.map((item) => (
        <Col span={8} key={item._id}>
          <Link to={`/items/${item._id}`}>
            <Card 
              title={item.itemAttributes.model} 
              bordered={true} 
              hoverable
              style={{ marginBottom: '16px' }}
            >
              <p>{item.itemDescription}</p>
              <Statistic title="Quantity" value={item.quantity} />
              <Statistic title="Weight" value={`${item.itemWeight} kg`} /> 
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ItemsList;
