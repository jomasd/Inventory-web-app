// ItemsPage.js
import React, { useState, useEffect } from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { ItemsCollection } from '/imports/api/items/items.js';
import ItemsList from '../ItemsList';
import ItemsSearch from '../ItemsSearch'; // make sure the import path is correct

export const ItemsPage = () => {
  const isLoading = useSubscribe('items');
  const allItems = useFind(() => ItemsCollection.find());
  const [filteredItems, setFilteredItems] = useState(allItems);

  // Define your filter options, you might want to fetch these from your server or pass them as props
  const filterOptions = {
    types: ['Electronics', 'Clothing', 'Furniture'], // example types
    brands: ['Brand A', 'Brand B', 'Brand C'], // example brands
    materials: ['Cotton', 'Plastic', 'Metal'], // example materials
  };

  useEffect(() => {
    setFilteredItems(allItems); // Reset when all items are fetched
  }, [allItems]);


  const handleSearch = (value) => {
    if (value) {
      const filtered = allItems.filter(item => 
        // item.itemName.toLowerCase().includes(value.toLowerCase()) || 
        item.itemDescription.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(allItems);
    }
  };


  const handleFilterChange = (value, filterType) => {
    let updatedFilteredItems = [...allItems]; // Start with all items

    if (value) {
      updatedFilteredItems = updatedFilteredItems.filter(item => {
        // Adjust the attribute path based on the filterType
        const attributePath = filterType === 'itemType' ? filterType : `itemAttributes.${filterType}`;
        const filterValue = _.get(item, attributePath)?.toLowerCase(); // Using lodash's get method to handle deep paths
        return filterValue.includes(value.toLowerCase());
      });
    }

    setFilteredItems(updatedFilteredItems);
  };

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Items List:</h2>
      <ItemsSearch 
        onSearch={handleSearch} 
        onFilterChange={handleFilterChange} 
        filterOptions={filterOptions}
      />
      <ItemsList items={filteredItems} />
    </div>
  );
};

export default ItemsPage;
