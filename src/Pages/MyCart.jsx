// src/MyCart.jsx
import React from "react";

export default function MyCart() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 font-sans bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
        MY CART <span role="img" aria-label="cart">🛒</span>
      </h1>

      {/* Product Card */}
      <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition space-y-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="w-24 h-24 bg-gray-300 rounded-lg flex-shrink-0" />
          <div className="flex-1 space-y-1">
            <h2 className="font-semibold text-lg">PRODUCT DETAILS:</h2>
            <p className="text-sm text-gray-600">Panty, 6177, 7thA, 2283</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 border rounded hover:bg-red-100">Remove</button>
          <button className="px-4 py-2 border rounded hover:bg-yellow-100">Save for Later</button>
          <button className="px-4 py-2 border rounded bg-yellow-400 hover:bg-yellow-500 text-black">Buy Now</button>
        </div>
      </div>

      {/* Duplicate Product Placeholder */}
      <div className="border p-4 rounded-xl text-center text-gray-500 bg-gray-50">SAME AS TOP</div>

      {/* Price Details */}
      <div className="border p-4 rounded-xl bg-gray-50">
        <h2 className="font-semibold text-xl mb-4">PRICE DETAILS</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Total Price</span>
            <span>₹ 999</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">- ₹ 716</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span>₹ 3</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount</span>
            <span>₹ 286</span>
          </div>
        </div>
      </div>

      {/* Address Form */}
      <div className="border p-4 rounded-xl bg-gray-50 space-y-4">
        <h2 className="font-semibold text-xl">Enter Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-3 rounded outline-blue-400" placeholder="D/NO" />
          <input className="border p-3 rounded outline-blue-400" placeholder="COLONY" />
          <input className="border p-3 rounded outline-blue-400" placeholder="AREA" />
          <input className="border p-3 rounded outline-blue-400" placeholder="CITY" />
          <input className="border p-3 rounded md:col-span-2 outline-blue-400" placeholder="PIN CODE" />
        </div>
        <div className="flex gap-4 items-center">
          <input className="flex-1 border p-3 rounded outline-blue-400" placeholder="🗨 Comments" />
          <button className="px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition">Done</button>
        </div>
      </div>
    </div>
  );
}
