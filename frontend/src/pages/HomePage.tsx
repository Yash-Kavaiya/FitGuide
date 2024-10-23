// src/pages/HomePage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaUtensils, FaBrain } from 'react-icons/fa'; // Importing icons
import { GiBodyBalance } from 'react-icons/gi';

const HomePage: React.FC = () => {
  return (
    <div className="font-nunito">
      {/* Hero Section */}
      <header className="bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-12 md:py-24">
          {/* Left Side: Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-primaryGreen mb-6 leading-tight">
              Achieve Your{' '}
              <span className="text-secondaryGreen">Fitness Goals</span> with
              FitGuide
            </h1>
            <p className="text-grayText text-lg md:text-xl mb-8">
              Personalized workouts, diet plans, and AI-powered insights
              tailored just for you.
            </p>
            <Link
              to="/signup"
              className="bg-accentYellow hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
            >
              Get Started
            </Link>
          </div>
          {/* Right Side: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/assets/fitness_hero.svg"
              alt="Fitness Hero"
              className="w-full h-auto"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-lightYellow py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primaryGreen text-center mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center">
              <FaDumbbell className="text-primaryGreen text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-secondaryGreen">
                Workout Plans
              </h3>
              <p className="text-grayText">
                Tailored routines to match your goals and fitness level.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center">
              <FaUtensils className="text-primaryGreen text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-secondaryGreen">
                Diet Recommendations
              </h3>
              <p className="text-grayText">
                Meal plans designed to complement your workouts.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center">
              <GiBodyBalance className="text-primaryGreen text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-secondaryGreen">
                Posture Correction
              </h3>
              <p className="text-grayText">
                Improve your form with AI-powered posture analysis.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center">
              <FaBrain className="text-primaryGreen text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-secondaryGreen">
                AI Insights
              </h3>
              <p className="text-grayText">
                Leverage AI for emotion detection and predictive imaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primaryGreen mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-grayText mb-8">
            Join FitGuide and take the first step towards a healthier you.
          </p>
          <Link
            to="/signup"
            className="bg-secondaryGreen hover:bg-primaryGreen text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primaryGreen text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} FitGuide. All rights reserved.
          </p>
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
    </div>
  );
};

export default HomePage;
