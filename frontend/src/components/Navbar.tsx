// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-xl">
          FitGuide
        </Link>
        <div>
          <Link to="/workout-plans" className="mr-4">
            Workout Plans
          </Link>
          <Link to="/diet-recommendations" className="mr-4">
            Diet Plans
          </Link>
          <Link to="/bmi-calculator" className="mr-4">
            BMI Calculator
          </Link>
          <Link to="/chatbot" className="mr-4">
            Chatbot
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
