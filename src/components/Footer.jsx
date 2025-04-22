import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white p-4 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
