import React, { useState, useEffect } from 'react';
import './Home.css';
import HomeItem from '../components/HomeItem';
import Trie from '../components/Trie';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [itemSearchQuery, setItemSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  const items = [
    'All',
    'Electronics',
    'Books',
    'Clothes',
    'Cycle',
    'Furnitures',
    'Laptop',
    'Mobile Phone',
    'Tablet',
    'Headphones',
    'Speakers',
    'Smartwatch',
    'Camera',
    'Television',
    'Charger',
    'Monitor',
    'Keyboard',
    'Mouse',
    'Printer',
    'Router',
    'Bookshelf',
    'Desk',
    'Chair',
    'Sofa',
    'Bed',
    'Wardrobe',
    'Dresser',
    'Coffee Table',
    'Dining Table',
    'Lamp',
    'Rug',
    'Curtains',
    'Bicycle',
    'Mountain Bike',
    'Road Bike',
    'Electric Bike',
    'Bike Helmet',
    'Bike Lock',
    'Bike Lights',
    'T-shirt',
    'Shirt',
    'Pants',
    'Jeans',
    'Jacket',
    'Sweater',
    'Coat',
    'Dress',
    'Skirt',
    'Shorts',
    'Shoes',
    'Sandals',
    'Boots',
    'Sneakers',
    'Hats',
    'Gloves',
    'Scarves',
    'Backpack',
    'Handbag',
    'Wallet',
    'Watch',
    'Jewelry',
    'Perfume',
    'Makeup',
    'Skincare',
    'Haircare',
    'Toys',
    'Board Games',
    'Puzzles',
    'Video Games',
    'Console',
    'Action Figures',
    'Dolls',
    'Stuffed Animals',
    'Outdoor Toys',
    'Educational Toys',
    'Art Supplies',
    'Musical Instruments',
    'Guitar',
    'Piano',
    'Drums',
    'Violin',
    'Flute',
    'Clarinet',
    'Trumpet',
    'Saxophone',
    'Sheet Music',
    'Sports Equipment',
    'Soccer Ball',
    'Basketball',
    'Football',
    'Tennis Racket',
    'Golf Clubs',
    'Baseball Bat',
    'Hockey Stick',
    'Skates',
    'Swimwear',
    'Fitness Tracker',
    'Yoga Mat',
    'Dumbbells',
    'Exercise Bike',
    'Treadmill',
    'Nutrition Supplements',
    'Protein Powder',
    'Vitamins',
    'Minerals',
    'Healthy Snacks',
    'Grocery',
    'Fruits',
    'Vegetables',
    'Dairy Products',
    'Meat',
    'Fish',
    'Seafood',
    'Bakery',
    'Canned Goods',
    'Frozen Foods',
    'Beverages',
    'Juices',
    'Soft Drinks',
    'Water',
    'Alcoholic Beverages',
    'Wine',
    'Beer',
    'Spirits',
    'Home Decor',
    'Paintings',
    'Wall Art',
    'Vases',
    'Candles',
    'Clocks',
    'Mirrors',
    'Bedding',
    'Blankets',
    'Pillows',
    'Duvets',
    'Bed Sheets',
    'Comforters',
    'Towels',
    'Bathrobes',
    'Kitchen Appliances',
    'Refrigerator',
    'Oven',
    'Microwave',
    'Toaster',
    'Blender',
    'Mixer',
    'Coffee Maker',
    'Dishwasher',
    'Cooking Utensils',
    'Pots',
    'Pans',
    'Cutlery',
    'Plates',
    'Bowls',
    'Glasses',
    'Mugs',
    'Pet Supplies',
    'Dog Food',
    'Cat Food',
    'Bird Food',
    'Fish Food',
    'Pet Toys',
    'Pet Beds',
    'Pet Cages',
    'Pet Leashes',
    'Pet Collars',
    'Pet Grooming',
    'Cleaning Supplies',
    'Detergents',
    'Disinfectants',
    'Vacuum Cleaners',
    'Brooms',
    'Mops',
    'Cleaning Cloths',
    'Cleaning Sprays',
    'Bathroom Cleaners',
    'Kitchen Cleaners',
    'Car Supplies',
    'Car Wash',
    'Car Wax',
    'Car Polish',
    'Car Mats',
    'Car Seat Covers',
    'Car Vacuum',
    'Car Tools',
    'Car Accessories',
    'Gardening Tools',
    'Garden Hose',
    'Garden Rake',
    'Shovel',
    'Pruning Shears',
    'Lawn Mower',
    'Plant Pots',
    'Plant Seeds',
    'Fertilizers',
    'Pesticides',
    'Outdoor Furniture',
    'Grill',
    'Patio Set',
    'Hammock',
    'Outdoor Umbrella',
    'Fire Pit',
    'Outdoor Lighting',
    'Travel Accessories',
    'Luggage',
    'Travel Pillow',
    'Travel Adapter',
    'Travel Bag',
    'Passport Holder',
    'Travel Bottles',
    'Travel Locks',
    'Books',
    'Fiction',
    'Non-Fiction',
    'Comics',
    'Graphic Novels',
    'Textbooks',
    'E-Books',
    'Audiobooks',
    'Magazines',
    'Newspapers',
    'Subscription Services',
    'Streaming Services',
    'Music Subscription',
    'Video Subscription',
    'Book Subscription',
    'Magazine Subscription',
    'Fitness Subscription'
  ];
  
  const priceRanges = ['<100', '100-300', '300-500', '500-1000', '>1000'];

  const trie = React.useRef(new Trie()).current;

  useEffect(() => {
    items.forEach(item => trie.insert(item.toLowerCase()));
  }, [items, trie]);

  const handleItemInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setItemSearchQuery(query);
    if (query) {
      setFilteredItems(trie.search(query));
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setItemSearchQuery(item);
    setShowDropdown(false);
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value);
  };
  return (
    <div className='home'>
      <div className='searchbox'>
        <input
          type="text"
          value={itemSearchQuery}
          onChange={handleItemInputChange}
          placeholder="Select an item"
        />
        {showDropdown && (
          <div className='dropdown'>
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className='dropdown-item'
                onClick={() => handleItemSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
        
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
        <button >Find</button>
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