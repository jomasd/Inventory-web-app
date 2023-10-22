import React, { useState } from 'react';
import { Collapse, Card, Modal, Button } from 'antd';

const { Panel } = Collapse;

// Mock data for demonstration
const locations = [
  {
    id: 1,
    name: 'Ancient Cave',
    containers: [
      {
        id: 101,
        name: 'Old Chest',
        items: [
          { id: 1001, name: 'Mystic Dagger', description: 'An ancient dagger emanating a strange energy.' },
          // ... more items
        ],
      },
      {
        id: 102,
        name: 'Old Chest',
        items: [
          { id: 1001, name: 'Mystic Dagger', description: 'An ancient dagger emanating a strange energy.' },
          { id: 1001, name: 'Mystic Dagger', description: 'An ancient dagger emanating a strange energy.' },
          { id: 1001, name: 'Mystic Dagger', description: 'An ancient dagger emanating a strange energy.' },
          // ... more items
        ],
      },
      // ... more containers
    ],
  },
  {
    id: 2,
    name: 'Ancient Cave',
    containers: [
      {
        id: 101,
        name: 'Old Chest',
        items: [
          { id: 1001, name: 'Mystic Dagger', description: 'An ancient dagger emanating a strange energy.' },
          // ... more items
        ],
      },
      {
        id: 102,
        name: 'Old Chest',
        items: [
          { id: 1001, name: 'Mystic Dagger', description: 'An ancient dagger emanating a strange energy.' },
          { id: 1001, name: 'Mystic Dagger', description: 'An ancient dagger emanating a strange energy.' },
          { id: 1001, name: 'Mystic Dagger', description: 'An ancient dagger emanating a strange energy.' },
          // ... more items
        ],
      },
      // ... more containers
    ],
  },
  // ... more locations
];

const InventoryPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const showItemDetails = (item) => {
    setSelectedItem(item);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Game Inventory</h1>

      <Collapse accordion>
        {locations.map((location) => (
          <Panel header={location.name} key={location.id}>
            <Collapse>
              {location.containers.map((container) => (
                <Panel header={container.name} key={container.id}>
                  {container.items.map((item) => (
                    <Card
                      key={item.id}
                      title={item.name}
                      extra={<Button onClick={() => showItemDetails(item)}>View Details</Button>}
                    >
                      <p>{item.description}</p>
                    </Card>
                  ))}
                </Panel>
              ))}
            </Collapse>
          </Panel>
        ))}
      </Collapse>

      {/* Item detail modal */}
      {selectedItem && (
        <Modal
          title={selectedItem.name}
          visible={true}
          onCancel={handleModalClose}
          footer={[
            <Button key="close" type="primary" onClick={handleModalClose}>
              Close
            </Button>,
          ]}
        >
          <p>{selectedItem.description}</p>
          {/* Here, you could add more detailed stats, perhaps in a table or list format */}
        </Modal>
      )}
    </div>
  );
};

export default InventoryPage;
