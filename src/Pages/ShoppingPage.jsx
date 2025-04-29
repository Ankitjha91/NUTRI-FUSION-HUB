import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import React from 'react';
import Slider from "react-slick";
import TabNavigation from '../components/TabNavigation';
import Clothes from '../assets/red tshirt.jpeg';
import Sneakers from '../assets/sneakers.jpg';
import Watch from '../assets/watch.webp';
import Cap from '../assets/cap.Avif';
import Bluejeans from '../assets/bluejeans.webp';
import Jaket from '../assets/jaket.Avif';
const products = [
  { id: 1, name: "Red T-Shirt", price: "₹299", img: Clothes },
  { id: 2, name: "Blue Jeans", price: "₹799", img: Bluejeans },
  { id: 3, name: "Sneakers", price: "₹1499", img: Sneakers },
  { id: 4, name: "Cap", price: "₹199", img: Cap },
  { id: 5, name: "Jacket", price: "₹999", img: Jaket },
  { id: 6, name: "Watch", price: "₹2499", img: Watch },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // minimum 4 columns
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 }
    }
  ]
};

const ShoppingPage = () => {
  const navigate = useNavigate(); // Use the hook to navigate to other pages

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 font-sans">
      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={() => navigate("/")}
          className="text-sm text-green-600 mb-6 bg-green-200 hover:bg-green-300 hover:text-green-800 rounded-lg px-4 py-2 flex flex-col items-center border-2 border-transparent hover:border-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 67" width="100" height="20">
            <path d="M2 35 Q30 10 80 25 Q100 30 115 28 Q114 34 100 38 Q60 55 25 45 Q10 40 2 35 Z" fill="silver" stroke="black" stroke-width="1"/>
            <path d="M80 25 Q85 35 90 40 Q100 50 110 45 Q113 40 115 28 Q105 35 95 30 Q85 28 80 25 Z" fill="#8B4513" stroke="black" stroke-width="1"/>
          </svg>
          <span>Back</span>  {/* "Back" text below the knife icon */}
        </button>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-4">SHOPPING</h1>
      <p className="text-center text-gray-600 mb-6 tracking-wide uppercase text-sm">The Nutri Fusion Hub</p>

      {/* Search Bar */}
      <div className="flex justify-center mb-6 px-4">
        <input
          type="text"
          placeholder="🔍 Search the product..."
          className="w-full max-w-xl p-3 rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Top Sale Section */}
      <section className="mx-4 mb-12">
        {/* Top Tabs */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            🔥 <span className="text-blue-600">Top</span> | 
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer mx-2 transition">Sale</span> | 
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition">Product of this Month</span>
          </h2>
        </div>

        {/* Best Selling Product Slider */}
        <div className="bg-gradient-to-r from-blue-200 to-purple-300 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">🔥 Best Selling Products</h2>

          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-3">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                  <img src={product.img} alt={product.name} className="h-80 w-full " />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-700">{product.name}</h3>
                    <p className="text-green-600 font-bold mt-2">{product.price}</p>
                    <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-full text-sm">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Tabs */}
      

      < TabNavigation />

     
    </div>
  );
};

export default ShoppingPage;
