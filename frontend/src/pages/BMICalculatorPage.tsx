// src/pages/BMICalculatorPage.tsx

import React, { useState } from 'react';

const BMICalculatorPage: React.FC = () => {
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();

    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      const roundedBMI = parseFloat(bmiValue.toFixed(1));
      setBMI(roundedBMI);
      determineBMICategory(roundedBMI);
    }
  };

  const determineBMICategory = (bmiValue: number) => {
    let category = '';
    let suggestion = '';

    if (bmiValue < 18.5) {
      category = 'Underweight';
      suggestion =
        'You are underweight. Consider a balanced diet and strength training to gain weight healthily.';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      category = 'Normal weight';
      suggestion =
        'You have a normal body weight. Maintain your current lifestyle to stay healthy.';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      category = 'Overweight';
      suggestion =
        'You are overweight. Incorporating a healthy diet and regular exercise can help you lose weight.';
    } else if (bmiValue >= 30) {
      category = 'Obesity';
      suggestion =
        'You are in the obese range. It is advisable to consult a healthcare provider for a personalized plan.';
    }

    setCategory(category);
    setSuggestion(suggestion);
  };

  return (
    <div className="container mx-auto px-4 py-12 font-nunito">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        BMI Calculator
      </h1>

      <form onSubmit={calculateBMI} className="max-w-md mx-auto">
        {/* Weight Input */}
        <div className="mb-6">
          <label
            htmlFor="weight"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            className="w-full border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Height Input */}
        <div className="mb-6">
          <label
            htmlFor="height"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            className="w-full border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
          >
            Calculate BMI
          </button>
        </div>
      </form>

      {/* Display BMI Result */}
      {bmi && (
        <div className="mt-12 max-w-md mx-auto bg-white p-6 rounded-md shadow-md text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Your BMI Result
          </h2>
          <p className="text-xl mb-2">
            <strong>BMI:</strong> {bmi}
          </p>
          <p className="text-xl mb-4">
            <strong>Category:</strong> {category}
          </p>
          <p className="text-gray-700">{suggestion}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculatorPage;
