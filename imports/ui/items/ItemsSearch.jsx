// ItemsSearch.js
import React, { useState } from 'react';
import { Input, Select } from 'antd';

const { Option } = Select;

const ItemsSearch = ({ onSearch, onFilterChange, filterOptions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleTypeChange = (value) => {
    setSelectedType(value);
    onFilterChange(value, 'itemType');
  };

  const handleBrandChange = (value) => {
    setSelectedBrand(value);
    onFilterChange(value, 'brand');
  };

  const handleMaterialChange = (value) => {
    setSelectedMaterial(value);
    onFilterChange(value, 'material');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <Input 
        placeholder="Search items..." 
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '10px' }}
      />
      <Select 
        placeholder="Filter by Type" 
        value={selectedType}
        onChange={handleTypeChange}
        style={{ width: '100%', marginBottom: '10px' }}
      >
        {filterOptions.types.map(type => <Option key={type} value={type}>{type}</Option>)}
      </Select>
      <Select 
        placeholder="Filter by Brand" 
        value={selectedBrand}
        onChange={handleBrandChange}
        style={{ width: '100%', marginBottom: '10px' }}
      >
        {filterOptions.brands.map(brand => <Option key={brand} value={brand}>{brand}</Option>)}
      </Select>
      <Select 
        placeholder="Filter by Material" 
        value={selectedMaterial}
        onChange={handleMaterialChange}
        style={{ width: '100%', marginBottom: '10px' }}
      >
        {filterOptions.materials.map(material => <Option key={material} value={material}>{material}</Option>)}
      </Select>
    </div>
  );
};

export default ItemsSearch;
