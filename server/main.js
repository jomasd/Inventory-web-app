import { Meteor } from 'meteor/meteor';
//items
import { ItemsCollection } from '../imports/api/items/items';
import { InsertItems } from  '../imports/api/items/server/methods.js';
import '../imports/api/items/server/publications';

//containers
import { ContainersCollection } from '../imports/api/containers/containers';
import { InsertContainers } from  '../imports/api/containers/server/methods.js';
import '../imports/api/containers/server/publications';

//locations
import { LocationsCollection } from '../imports/api/locations/locations'; 
import { insertLocation } from '../imports/api/locations/server/methods';
import '../imports/api/locations/server/publications';

//tradelogs
import { TradeLogsCollection } from '../imports/api/tradeLogs/tradeLogs'; 
import { insertTradeLog } from '../imports/api/tradeLogs/server/methods';
import '../imports/api/tradeLogs/server/publications';


//owners
import { OwnersCollection } from '../imports/api/owners/owners'; 
import { insertOwners } from '../imports/api/owners/server/methods';
import '../imports/api/owners/server/publications';

import { LinksCollection } from '../imports/api/links';
import { InventoryCollection } from '../imports/api/Inventory';


async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}
async function insertInventory({ name, category, serialNumber, quantity }) {
  await InventoryCollection.insertAsync({ name, category, serialNumber, quantity, createdAt: new Date() });
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await LinksCollection.find().countAsync() === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app',
    });

    await insertLink({
      title: 'Follow the Guide',
      url: 'https://guide.meteor.com',
    });

    await insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    });

    await insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
    });
  }
  // If the Inventory collection is empty, add some data.
  if (await InventoryCollection.find().countAsync() === 0) {
    await insertInventory({
      name: 'Item 1',
      category: 'Electronics',
      serialNumber: 'SN12345',
      quantity: 10,
    });

    await insertInventory({
      name: 'Item 2',
      category: 'Furniture',
      serialNumber: 'SN67890',
      quantity: 5,
    });
  }
  // If the Items collection is empty, add some data.
  if (await ItemsCollection.find().countAsync() === 0) {    
    await InsertItems({
      itemName: 'Laptop',
      itemType: 'Electronics',
      itemWeight: 2.5,
      itemDescription: 'A high-performance laptop with a powerful processor',
      container: {
        id: 'ABC123',
      },
      itemAttributes: {
        brand: 'Dell',
        model: 'XPS 13',
        material: 'Aluminum',
        dimensions: {
          length: 12.0,
          width: 8.0,
          height: 0.6,
        },
        color: 'Silver',
        warranty: {
          startDate: new Date('2022-01-01'),
          endDate: new Date('2024-01-01'),
          coverage: 'Covers defects in materials and workmanship',
        },
      },
    });
  }
  // If the Containers collection is empty, add some data.
  if (await ContainersCollection.find().countAsync() === 0) {    
    await InsertContainers({
      containerName: 'Backpack',
      containerType: 'Backpack',
      containerCapacity: 20,
      containerWeight: 2,
      containerDescription: 'A durable backpack for carrying items',
      containerAttributes: {
        brand: 'North Face',
        model: 'Jester',
        material: 'Nylon',
        dimensions: {
          length: 20,
          width: 15,
          height: 10,
        },
        color: 'Black',
        warranty: {
          startDate: new Date('2022-01-01'),
          endDate: new Date('2024-01-01'),
          coverage: 'Covers defects in materials and workmanship',
        },
      },
    });
  }
  // If the Locations collection is empty, add some data.
  if (await LocationsCollection.find().countAsync() === 0) {
    await insertLocation({
      locationName: 'Dungeon',
      locationDescription: 'An underground maze full of monsters and treasures',
      locationType: 'Dungeon',
      locationCoordinates: 'X: 10, Y: 20',
      building: 'The Dark Castle',
      room: 'The Cursed Catacombs',
    });
  }
  // If the TradeLogs collection is empty, add some data.
  if (await TradeLogsCollection.find().countAsync() === 0) {
    await insertTradeLog({
      timestamp: new Date(),
      buyerId: 1,
      sellerId: 2,
      itemId: 3,
      quantity: 5,
      price: 10.99,
    });
  }
  // If the Owners collection is empty, add some data.
  if (await  OwnersCollection.find().countAsync() === 0) {
    await insertOwners({
      ownerName: "John",
      ownerType: "Player",
      ownerLevel: 10,
      ownerBalance: 100.50
    });
  }
  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("links", function () {
    return LinksCollection.find();
  });
  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("inventory", function () {
    return InventoryCollection.find();
  });
});
