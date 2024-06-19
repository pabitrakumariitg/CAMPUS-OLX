import React, { useState } from 'react';
import './Home.css';
import HomeItem from '../components/HomeItem';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const items = ['All', 'Electronics', 'Books', 'Clothes', 'Cycle', 'Furnitures'];
  const priceRanges = ['<100', '100-300', '300-500', '500-1000', '>1000'];

  const handleItemChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  return (
    <div className='home'>
      <div className='searchbox'>
        <select 
          className='item-select'
          value={selectedItem}
          onChange={handleItemChange}
        >
          <option value='' disabled>Select an item</option>
          {items.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        
        <select 
          className='price-select'
          value={selectedPriceRange}
          onChange={handlePriceRangeChange}
        >
          <option value='' disabled>Select price range</option>
          {priceRanges.map((range, index) => (
            <option key={index} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
      <div className='list'>
      <HomeItem></HomeItem>
      <HomeItem></HomeItem>
      <HomeItem></HomeItem>
      <HomeItem></HomeItem>
      </div>
    </div>
  );
}

export default Home;
