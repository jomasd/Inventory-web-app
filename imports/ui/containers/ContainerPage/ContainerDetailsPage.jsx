import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { ContainersCollection } from '../../../api/containers/containers';
import { List, Spin, Tabs } from 'antd';
import ItemsList from '../../items/ItemsList';
import { UnorderedListOutlined, ProfileOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;


export const ContainerDetailsPage = () => {
  const { containerId } = useParams();

  const container = useTracker(() => {
    return ContainersCollection.findOne(containerId);
  });

  if (!container) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}><Spin size="large" /></div>;
  }

  // Mock data for items within the container
  const mockItems = [
    { 
      _id: "Fpa2RSbN3EwnBATkx",
      itemType: "Electronics",
      itemWeight: 2.5,
      itemDescription: "A high-performance laptop for everyday use",
      itemAttributes: {
        brand: "TechBrand",
        model: "Laptop-X",
        material: "Aluminum",
        dimensions: {
          length: 35,
          width: 24,
          height: 2
        },
        color: "Silver",
        expirationDate: null,
        warranty: {
          startDate: "2023-03-19T00:00:00.000Z",
          endDate: "2025-03-19T00:00:00.000Z",
          coverage: "Covers all hardware and software issues"
        },
        createdAt: "2023-03-19T22:05:21.838Z"
      }
    },
    { 
      _id: "Fpa2RSbN3EwnBATkx",
      itemType: "Electronics",
      itemWeight: 2.5,
      itemDescription: "A high-performance laptop for everyday use",
      itemAttributes: {
        brand: "TechBrand",
        model: "Laptop-X",
        material: "Aluminum",
        dimensions: {
          length: 35,
          width: 24,
          height: 2
        },
        color: "Silver",
        expirationDate: null,
        warranty: {
          startDate: "2023-03-19T00:00:00.000Z",
          endDate: "2025-03-19T00:00:00.000Z",
          coverage: "Covers all hardware and software issues"
        },
        createdAt: "2023-03-19T22:05:21.838Z"
      }
    },
    { 
      _id: "Fpa2RSbN3EwnBATkx",
      itemType: "Electronics",
      itemWeight: 2.5,
      itemDescription: "A high-performance laptop for everyday use",
      itemAttributes: {
        brand: "TechBrand",
        model: "Laptop-X",
        material: "Aluminum",
        dimensions: {
          length: 35,
          width: 24,
          height: 2
        },
        color: "Silver",
        expirationDate: null,
        warranty: {
          startDate: "2023-03-19T00:00:00.000Z",
          endDate: "2025-03-19T00:00:00.000Z",
          coverage: "Covers all hardware and software issues"
        },
        createdAt: "2023-03-19T22:05:21.838Z"
      }
    },
    { 
      _id: "Fpa2RSbN3EwnBATkx",
      itemType: "Electronics",
      itemWeight: 2.5,
      itemDescription: "A high-performance laptop for everyday use",
      itemAttributes: {
        brand: "TechBrand",
        model: "Laptop-X",
        material: "Aluminum",
        dimensions: {
          length: 35,
          width: 24,
          height: 2
        },
        color: "Silver",
        expirationDate: null,
        warranty: {
          startDate: "2023-03-19T00:00:00.000Z",
          endDate: "2025-03-19T00:00:00.000Z",
          coverage: "Covers all hardware and software issues"
        },
        createdAt: "2023-03-19T22:05:21.838Z"
      }
    },
    // ... add more mock items as needed
  ];

  return (
    <div>
      <h2>{container.containerName}</h2>
      <p>Type: {container.containerType}</p>
      <p>Capacity: {container.containerCapacity}</p>
      <p>Weight: {container.containerWeight}</p>
      <p>Description: {container.containerDescription}</p>
      
      {/* Using Tabs to organize content */}
      <Tabs defaultActiveKey="1">
        <TabPane
            tab={
              <span>
                <UnorderedListOutlined /> 
                Items
              </span>
            }
            key="1"
          >
          <ItemsList items={mockItems} />
        </TabPane>
        <TabPane
          tab={
            <span>
              <ProfileOutlined /> 
              Attributes
            </span>
          }
          key="2"
        >
          <List
            dataSource={[
              `Brand: ${container.containerAttributes.brand}`,
              `Model: ${container.containerAttributes.model}`,
              `Material: ${container.containerAttributes.material}`,
              `Dimensions: L: ${container.containerAttributes.dimensions.length}, W: ${container.containerAttributes.dimensions.width}, H: ${container.containerAttributes.dimensions.height}`,
              `Color: ${container.containerAttributes.color}`,
              `Warranty: Start: ${new Date(container.containerAttributes.warranty.startDate).toLocaleDateString()}, End: ${new Date(container.containerAttributes.warranty.endDate).toLocaleDateString()}, Coverage: ${container.containerAttributes.warranty.coverage}`,
            ]}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ContainerDetailsPage;
