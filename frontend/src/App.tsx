// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importing pages
import HomePage from './pages/HomePage';
import WorkoutPlanPage from './pages/WorkoutPlanPage';
import DietRecommendationPage from './pages/DietRecommendationPage';
import BMICalculatorPage from './pages/BMICalculatorPage';
import ChatbotPage from './pages/ChatbotPage';
import PostureCorrectionPage from './pages/PostureCorrectionPage';
import EmotionDetectionPage from './pages/EmotionDetectionPage';
import PredictiveImagingPage from './pages/PredictiveImagingPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Personalized Workout Plans */}
            <Route path="/workout-plans" element={<WorkoutPlanPage />} />

            {/* Diet Recommendations */}
            <Route
              path="/diet-recommendations"
              element={<DietRecommendationPage />}
            />

            {/* BMI Calculator and Lifestyle Advice */}
            <Route
              path="/bmi-calculator"
              element={<BMICalculatorPage />}
            />

            {/* AI Chatbot for General Queries */}
            <Route path="/chatbot" element={<ChatbotPage />} />

            {/* Posture Correction via Video Analysis */}
            <Route
              path="/posture-correction"
              element={<PostureCorrectionPage />}
            />

            {/* Emotion Detection via Live Camera */}
            <Route
              path="/emotion-detection"
              element={<EmotionDetectionPage />}
            />

            {/* Predictive Imaging Based on User Data */}
            <Route
              path="/predictive-imaging"
              element={<PredictiveImagingPage />}
            />

            {/* Add more routes here if needed */}
          </Routes>
        </main>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
