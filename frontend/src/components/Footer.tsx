// src/components/Footer.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} FitGuide. All rights reserved.</p>
        <div className="mt-4">
          <Link to="/privacy" className="text-white hover:underline mx-2">
            Privacy Policy
          </Link>
          |
          <Link to="/terms" className="text-white hover:underline mx-2">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
