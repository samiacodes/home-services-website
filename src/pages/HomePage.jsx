import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section - Temporary */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Rest of the content will go here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-600">Other sections coming soon...</p>
      </div>
    </div>
  );
};

export default HomePage;