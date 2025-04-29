import { useState, useRef, useEffect } from 'react';
import ProductDetails from './ProductDetails';

// Import your images
import Food from '../assets/food.jpg';
import Sport from '../assets/shoes.avif';
import Clothes from '../assets/clothes.webp';

function TabNavigation() {
  const categories = ['Clothings', 'Sports Equipment', 'Food Products'];
  const [activeTab, setActiveTab] = useState('Clothings');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);

 
const shirtProduct = {
  category: 'Clothings',
  images: [
    { label: 'Front View', url: Clothes },
    { label: 'Side View', url: Clothes },
    { label: 'Back View', url: Clothes },
  ],
  colors: ['#000000', '#ffffff', '#ff0000'],
  rating: 5,
  discount: 71,
  originalPrice: 999,
  discountedPrice: 283,
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  description: `Elevate your style with our premium-quality shirts. Designed for comfort and built to last, perfect for both casual and formal occasions. Choose from multiple colors and sizes to fit your look.`,
};

const sportsProduct = {
  category: 'Sports Equipment',
  images: [
    { label: 'Front View', url: Sport },
    { label: 'Side View', url: Sport },
    { label: 'Back View', url: Sport },
  ],
  colors: ['#111111', '#eeeeee', '#ff5722'],
  rating: 4,
  discount: 40,
  originalPrice: 1999,
  discountedPrice: 1199,
  sizes: ['7', '8', '9', '10', '11'],
  description: `Boost your performance with our high-grip sports shoes. Whether you're running, training, or playing sports, our footwear ensures durability, comfort, and style. Designed for champions.`,
};

const foodProduct = {
  category: 'Food Products',
  images: [
    { label: 'Front View', url: Food },
    { label: 'Side View', url: Food },
    { label: 'Back View', url: Food },
  ],
  colors: ['#f5f5dc', '#ffe4c4', '#ffdead'],
  rating: 5,
  discount: 20,
  originalPrice: 500,
  discountedPrice: 400,
  sizes: ['Pack of 1', 'Pack of 3', 'Pack of 5'],
  description: `Enjoy fresh and delicious food packs made with premium ingredients. Perfect for everyday meals and special occasions. Sealed for freshness and packed with nutrition.`,
};


  useEffect(() => {
    const activeIndex = categories.indexOf(activeTab);
    const activeTabElement = tabRefs.current[activeIndex];
    if (activeTabElement) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="relative w-full px-4">
      {/* Tabs */}
      <nav className="relative flex justify-center gap-10 text-sm font-medium uppercase mb-16">
        {categories.map((category, index) => (
          <button
            key={category}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`relative px-4 py-2 ${
              activeTab === category ? 'text-blue-700 font-semibold' : 'text-gray-600'
            } transition-all`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}

        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none">
          <div className="w-full border-t border-gray-300 absolute"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none">
          <div className="w-full border-t border-gray-300 absolute"></div>
        </div>

        {/* Short Active Lines */}
        <div
          className="absolute h-0.5 bg-blue-700 transition-all duration-300"
          style={{ top: 0, left: indicatorStyle.left, width: indicatorStyle.width }}
        ></div>
        <div
          className="absolute h-0.5 bg-blue-700 transition-all duration-300"
          style={{ bottom: 0, left: indicatorStyle.left, width: indicatorStyle.width }}
        ></div>
      </nav>

      {/* Tab Content */}
      <div className="text-center text-lg font-semibold">
        {activeTab === 'Clothings' && <ProductDetails product={shirtProduct} />}
        {activeTab === 'Sports Equipment' && <ProductDetails product={sportsProduct} />}
        {activeTab === 'Food Products' && <ProductDetails product={foodProduct} />}
      </div>
    </div>
  );
}

export default TabNavigation;
