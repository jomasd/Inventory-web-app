import React, { useState } from 'react';
import { Collapse, Modal, Button, Tooltip } from 'antd';
import { InfoCircleOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

// Sample mock data based on the schemas
const mockLocations = [
  {
    _id: 'location1',
    name: 'Warehouse A',
    containers: [
      {
        _id: 'container1',
        name: 'Shelf A1',
        items: [
          {
            _id: 'item1',
            name: 'Product 1',
            description: 'Description for Product 1',
            category: 'Electronics',
            quantity: 10,
          },
          // ... other items
        ],
      },
      {
        _id: 'container1',
        name: 'Shelf A1',
        items: [
          {
            _id: 'item1',
            name: 'Product 1',
            description: 'Description for Product 1',
            category: 'Electronics',
            quantity: 10,
          },
          // ... other items
        ],
      },
      // ... other containers
    ],
  },
  // ... other locations
];

// Individual item with more detail and interactivity
const ItemComponent = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemCount, setItemCount] = useState(item.quantity);

  const showItemModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const increaseItem = () => {
    setItemCount(itemCount + 1);
    // Here, you would also handle any backend updates necessary
  };

  const decreaseItem = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
      // Here, you would also handle any backend updates necessary
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Tooltip title="Click for more info" color="blue">
          <Button type="link" onClick={showItemModal} style={{ padding: 0 }}>
            {item.name}
          </Button>
        </Tooltip>
        <span> (Quantity: {itemCount})</span>
      </div>
      <div>
        <Button icon={<PlusOutlined />} onClick={increaseItem} />
        <Button icon={<MinusOutlined />} onClick={decreaseItem} />
      </div>

      {/* Modal for displaying item details */}
      <Modal title={item.name} visible={modalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p><strong>Description:</strong> {item.description}</p>
        <p><strong>Category:</strong> {item.category}</p>
        {/* Other item details here */}
      </Modal>
    </div>
  );
};

const ContainerComponent = ({ container }) => (
  <Collapse>
    <Panel header={container.name} key={container._id}>
      {container.items.map(item => (
        <ItemComponent key={item._id} item={item} />
      ))}
    </Panel>
  </Collapse>
);

const LocationComponent = ({ location }) => (
  <Collapse>
    <Panel header={location.name} key={location._id}>
      {location.containers.map(container => (
        <ContainerComponent key={container._id} container={container} />
      ))}
    </Panel>
  </Collapse>
);

const InventoryPage = () => {
  return (
    <div>
      <h1>Inventory</h1>
      {mockLocations.map(location => (
        <LocationComponent key={location._id} location={location} />
      ))}
    </div>
  );
};

export default InventoryPage;
