// pages/services.tsx
"use client";

import React from "react";

interface Service {
  title: string;
  description: string;
  img: string;
}

interface Web3Section {
  title: string;
  placeholder: string;
  img: string;
}

const services: Service[] = [
  {
    title: "Web Application Development",
    description:
      "Simplifying Your Processes With Our Efficient Web Application Development!",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Mobile Application Development",
    description:
      "Your Novel Ideas Are Our Challenge. Think Big With Our Mobile Application Development!",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "CMS Development",
    description:
      "Experience Complete End To End Control With Our CMS Based Applications!",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Creatives",
    description:
      "Revolutionize Your Company By Turning It Into An Innovative Brand!",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Digital Marketing",
    description: "Digital Marketing Is What Makes Your Business Sell!",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Get Potential Customers To Connect With Your Business Within Seconds!",
    img: "https://via.placeholder.com/150",
  },
];

const web3Sections: Web3Section[] = [
  { title: "Web 3.0", placeholder: "COMING SOON", img: "https://via.placeholder.com/150" },
  { title: "Metaverse", placeholder: "COMING SOON", img: "https://via.placeholder.com/150" },
  { title: "Blockchain (DEFI, DAPPs)", placeholder: "COMING SOON", img: "https://via.placeholder.com/150" },
  { title: "ML, AI & Data Science", placeholder: "COMING SOON", img: "https://via.placeholder.com/150" },
  { title: "NFTs", placeholder: "COMING SOON", img: "https://via.placeholder.com/150" },
  { title: "AR & VR", placeholder: "COMING SOON", img: "https://via.placeholder.com/150" },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Header */}
      <header className="relative bg-linear-to-r from-green-600 to-green-500 text-white py-36 px-4 sm:px-6 lg:px-20 text-center overflow-hidden">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
          We Create Technologies That Are Dynamic
        </h1>
        <p className="text-lg sm:text-2xl max-w-2xl mx-auto">
          Fast solutions, efficient workflows, and ideas that will take your company to the next level.
        </p>
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-white/10 rounded-full animate-pulse"></div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center text-center min-h-105"
            >
              <img
                src={service.img}
                alt={service.title}
                className="mb-6 w-32 h-32 object-cover rounded-full"
              />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transition from Web 2.0 to 3.0 */}
      <section className="py-20 px-4 sm:px-6 lg:px-20 bg-white relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Transitioning From Web 2.0 To 3.0
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {web3Sections.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-3xl shadow-md hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center text-center min-h-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mb-6 w-32 h-32 object-cover rounded-full"
              />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.placeholder}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-20 text-center bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to start your project?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Contact us today and let's bring your ideas to life!
        </p>
        <button className="bg-green-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-green-700 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default ServicesPage;
