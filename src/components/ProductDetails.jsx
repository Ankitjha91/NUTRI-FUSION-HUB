import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ProductDetails({ product }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Images Section */}
      <div className="flex justify-center gap-6 mb-6">
        {product.images.map((img, index) => (
          img.url ? (
            <div key={index} className="border p-2 w-32 h-32 flex items-center justify-center">
              <img src={img.url} alt={img.label} className="max-h-full" />
            </div>
          ) : null
        ))}
      </div>

      {/* Color Selection */}
      <div className="flex items-center gap-4 mb-6">
        <p className="font-semibold">Colour:</p>
        {product.colors.map((color, index) => (
          <div
            key={index}
            onClick={() => setSelectedColor(color)}
            className={`w-8 h-8 border-2 cursor-pointer rounded ${selectedColor === color ? 'border-blue-500' : 'border-gray-300'}`}
            style={{ backgroundColor: color }}
          ></div>
        ))}
        <p className="ml-8 text-gray-500">Available colour:</p>
      </div>

      {/* Product Details */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Product details:</p>
        <div className="flex items-center gap-2 mb-2">
          <span>Rating:</span>
          {'★★★★★☆☆☆☆☆'.slice(0, product.rating)}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-red-600 font-bold">↓ {product.discount}%</span>
          <span className="line-through text-gray-400">₹ {product.originalPrice}</span>
          <span className="text-green-600 font-bold text-lg">₹ {product.discountedPrice}</span>
        </div>
      </div>


      {/* About / Description Section */}
<div className="mb-6">
  <p className="font-semibold mb-2">About:</p>
  <p className="text-gray-700 leading-relaxed">{product.description}</p>
</div>


     {/* Size (or Pack) Selection */}
<div className="mb-6">
<p className="font-semibold mb-2">
  {product.category === 'Food Products' ? 'Pack:' : 'Size:'}
</p>

  <div className="flex flex-wrap gap-4">
    {product.sizes.map((size, index) => (
      <button
        key={index}
        onClick={() => setSelectedSize(size)}
        className={`px-4 py-2 rounded-full border text-sm ${
          selectedSize === size ? 'bg-blue-500 text-white' : 'border-gray-400'
        }`}
      >
        {size}
      </button>
    ))}
  </div>
</div>




      {/* Buttons */}
      <Link to="/MyCart">
      <div className="flex justify-between">
     
     <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded">
       <FaShoppingCart /> Add to Cart
     </button>
     <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
       Buy Now
     </button>
   </div>
      </Link>

    </div>
  );
}

export default ProductDetails;
