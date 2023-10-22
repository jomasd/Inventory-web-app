import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Tabs, Statistic, Card } from 'antd';
import { HomeOutlined} from '@ant-design/icons';
import ContainersList from '../../containers/ContainersList';
import ItemsList from '../../items/ItemsList'; // Import your ItemsList component

const { TabPane } = Tabs;

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


// Example mock data for containers within a specific location
const mockContainers = [
  {
    _id: 'container1',
    containerName: 'Electronics Storage',
    description: 'This container stores various electronic products.',
    itemsCount: 28, // Number of items within the container
    containerCapacity: 50, // Maximum number of items the container can hold
    containerWeight: 150, // Total weight capacity of the container
    // ... other properties specific to the container
  },
  {
    _id: 'container2',
    containerName: 'Apparel Storage',
    description: 'This container stores clothing and apparel.',
    itemsCount: 60,
    containerCapacity: 100,
    containerWeight: 200,
    // ... other properties specific to the container
  },
  // ... more containers as needed
];

// Example mock data for items within the containers at the location
const mockItems = [
  {
    _id: 'item1',
    itemName: 'Laptop',
    itemType: 'Electronics',
    itemDescription: 'A high-performance laptop for gaming and professional work.',
    itemAttributes: {
      brand: 'TechBrand',
      model: 'ProBook 450',
      material: 'Aluminum',
      color: 'Silver',
      // ... other attributes specific to the item
    },
    containerId: 'container1', // The ID of the container this item is stored in
    // ... other properties specific to the item
  },
  {
    _id: 'item2',
    itemName: 'Headphones',
    itemType: 'Electronics',
    itemDescription: 'Noise-cancelling headphones with high-quality sound.',
    itemAttributes: {
      brand: 'AudioCompany',
      model: 'QuietComfort 35',
      material: 'Plastic',
      color: 'Black',
      // ... other attributes specific to the item
    },
    containerId: 'container1',
    // ... other properties specific to the item
  },
  {
    _id: 'item3',
    itemName: 'T-Shirt',
    itemType: 'Apparel',
    itemDescription: 'A comfortable cotton t-shirt.',
    itemAttributes: {
      brand: 'ClothesBrand',
      model: 'QuietComfort 35',
      size: 'L',
      material: 'Cotton',
      color: 'Blue',
      // ... other attributes specific to the item
    },
    containerId: 'container2',
    // ... other properties specific to the item
  },
  // ... more items as needed
];


const LocationDetailsPage = () => {
  const [locationDetails, setLocationDetails] = useState(null);
  const [containers, setContainers] = useState([]);
  const [items, setItems] = useState([]); // New state for items
  const [loading, setLoading] = useState(true);

  const { locationId } = useParams(); // get the location ID from the URL

  useEffect(() => {
    // Simulating a data fetch with a timeout
    setTimeout(() => {
      // This should be your actual data fetching logic
      setLocationDetails(mockLocationDetails);
      setContainers(mockContainers);
      setItems(mockItems); // Set the mock items
      setLoading(false);
    }, 1000); // simulated network delay
  }, [locationId]);

  if (loading) {
    return <Spin />;
  }

  return (
    <div>
      <h1>{locationDetails.name}</h1>
      <p>{locationDetails.description}</p>

      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <HomeOutlined />
              Details
            </span>
          }
          key="1"
        >
          <Card>
            <Statistic title="Total Rooms" value={locationDetails.totalRooms} />
            <Statistic title="Total Containers" value={locationDetails.containerTotal} />
            <Statistic title="Total Items" value={locationDetails.itemTotal} />
          </Card>
        </TabPane>
        <TabPane
          tab={
            <span>
              
              Containers
            </span>
          }
          key="2"
        >
          <ContainersList containers={containers} />
        </TabPane>
        <TabPane tab="Items" key="3">
          <ItemsList items={items} /> {/* Render the items list */}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default LocationDetailsPage;
