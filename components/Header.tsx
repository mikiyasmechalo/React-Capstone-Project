import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/logo.png" alt="Rebel Rover Logo" className="h-10 mr-4" /> 
        <span className="font-bold text-xl">REBEL ROVER</span>
      </div>
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About Us</a>
        <div className="relative group">
          <button className="hover:text-gray-300">Package</button>
          <div className="absolute hidden group-hover:block bg-gray-700 rounded p-2 mt-2">
            <a href="#" className="block hover:text-gray-300">Package 1</a>
            <a href="#" className="block hover:text-gray-300">Package 2</a>
          </div>
        </div>
        <div className="relative group">
          <button className="hover:text-gray-300">Destination</button>
          <div className="absolute hidden group-hover:block bg-gray-700 rounded p-2 mt-2">
            <a href="#" className="block hover:text-gray-300">Destination 1</a>
            <a href="#" className="block hover:text-gray-300">Destination 2</a>
          </div>
        </div>
        <a href="#" className="hover:text-gray-300">Blog</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </nav>
      <div className="md:hidden">
        <button>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
          </svg>
        </button>
      </div>
      <button className="hidden md:block">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27A6.472 6.472 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </button>
    </header>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="relative">
        <img src="/contact-bg.png" alt="Contact Background" className="w-full h-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-sm">Home &gt; Contact</p>
        </div>
      </div>
      <div className="container mx-auto p-4">
      </div>
    </div>
  );
};

export default ContactPage;