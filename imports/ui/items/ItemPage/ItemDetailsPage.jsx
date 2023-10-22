import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Tabs, Statistic, Button, Spin, Table } from 'antd';
import { ClockCircleOutlined, ContainerOutlined, SwapOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

// const item = useTracker(() => {
//   return ItemsCollection.findOne(itemId);
// });

// Mock data for the item details
const mockItem = {
  _id: "item123",
  itemName: "High-Performance Laptop",
  itemType: "Electronics",
  itemDescription: "A high-performance laptop for gaming and professional work.",
  itemAttributes: {
    brand: "TechBrand",
    model: "ProBook 450",
    material: "Aluminum",
    color: "Silver",
    // ... other attributes
  },
  warranty: {
    startDate: "2023-01-01",
    endDate: "2025-01-01",
    coverage: "Full hardware and software support",
  },
  expirationDate: "2025-01-01T00:00:00",
  containerId: "container123", // reference to the container this item is in
};

// Mock data for the container
const mockContainer = {
  _id: "container123",
  containerName: "Secure Electronics Storage",
  // ... other container details
};

// Mock data for the item's trade log
const mockTradeLog = [
  {
    key: '1',
    date: '2022-06-01',
    action: 'Received',
    from: 'Supplier X',
    to: 'Warehouse Y',
    quantity: 10,
  },
  {
    key: '2',
    date: '2022-09-12',
    action: 'Transferred',
    from: 'Warehouse Y',
    to: 'Retailer Z',
    quantity: 5,
  },
  // ... more trade log entries as needed
];

export const ItemDetailsPage = () => {
  const { itemId } = useParams(); // getting item ID from URL
  const [item, setItem] = useState(null);
  const [container, setContainer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a data fetch for the item and its container
    setTimeout(() => {
      // Here you would make actual API calls to fetch data
      setItem(mockItem);
      setContainer(mockContainer);
      setLoading(false);
    }, 1000); // simulated network delay
  }, [itemId]);

  if (loading) {
    return <Spin />;
  }
  // Calculate time until expiration (if applicable)
  const expirationTime = item.expirationDate 
  ? new Date(item.expirationDate).getTime() - new Date().getTime()
  : null;

   // Define the columns for the trade log table
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from',
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: 'to',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];

  return (
    <div>
      <h1>{item.itemName}</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span><ClockCircleOutlined />Item Details</span>} key="1">
          <p>{item.itemDescription}</p>
          {/* Other item details can be displayed here */}
        </TabPane>
        <TabPane tab={<span><ContainerOutlined />Attributes</span>} key="2">
          {/* List out all the attributes */}
          <p>Brand: {item.itemAttributes.brand}</p>
          <p>Model: {item.itemAttributes.model}</p>
          <p>Material: {item.itemAttributes.material}</p>
          {/* ... other attributes ... */}
        </TabPane>
        <TabPane tab="Warranty" key="3">
          <p>Warranty Coverage: {item.warranty.coverage}</p>
          <p>Start Date: {item.warranty.startDate}</p>
          <p>End Date: {item.warranty.endDate}</p>
        </TabPane>
        {item.expirationDate && (
        <TabPane tab="Expiration" key="4">
          <Statistic 
              title="Time until expiration" 
              value={expirationTime} 
              prefix={<ClockCircleOutlined />} 
              format="DD HH:mm:ss" 
            />
        </TabPane>
         )}
        <TabPane tab={<span><SwapOutlined />Trade Log</span>} key="5">
          <Table columns={columns} dataSource={mockTradeLog} pagination={false} />
        </TabPane>
      </Tabs>

      {container && (
        <Card style={{ marginTop: 20 }}>
          <p>Contained in: <Link to={`/containers/${container._id}`}>{container.containerName}</Link></p>
        </Card>
      )}

      <Link to="/items">
        <Button type="primary" style={{ marginTop: '20px' }}>
          Back to Items
        </Button>
      </Link>
    </div>
  );
};

export default ItemDetailsPage;
