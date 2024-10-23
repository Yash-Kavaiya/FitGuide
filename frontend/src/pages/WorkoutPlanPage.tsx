// src/pages/WorkoutPlanPage.tsx

import React, { useState } from 'react';

interface WorkoutPlanFormData {
  fitnessGoal: string;
  fitnessLevel: string;
  workoutDays: number;
  sessionDuration: number;
  equipmentAccess: string;
  physicalLimitations: string;
  preferredExercises: string[];
  workoutEnvironment: string;
  focusAreas: string[];
  previousExperience: string;
}

const WorkoutPlanPage: React.FC = () => {
  const [formData, setFormData] = useState<WorkoutPlanFormData>({
    fitnessGoal: '',
    fitnessLevel: '',
    workoutDays: 3,
    sessionDuration: 30,
    equipmentAccess: '',
    physicalLimitations: '',
    preferredExercises: [],
    workoutEnvironment: '',
    focusAreas: [],
    previousExperience: '',
  });

  const [workoutPlan, setWorkoutPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prevData) => {
        const updatedArray = prevData[name as keyof WorkoutPlanFormData] as string[];
        if (target.checked) {
          updatedArray.push(value);
        } else {
          const index = updatedArray.indexOf(value);
          if (index > -1) {
            updatedArray.splice(index, 1);
          }
        }
        return {
          ...prevData,
          [name]: updatedArray,
        };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'number' ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Here you would make an API call to your backend to generate the workout plan
    // For demonstration purposes, we'll mock the API response
    try {
      // Replace this with your actual API call
      const response = await new Promise<{ data: string }>((resolve) =>
        setTimeout(() => resolve({ data: 'Your personalized workout plan will appear here.' }), 2000),
      );

      setWorkoutPlan(response.data);
    } catch (error) {
      console.error('Error generating workout plan:', error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 font-nunito">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        Personalized Workout Plan
      </h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        {/* Fitness Goal */}
        <div className="mb-6">
          <label htmlFor="fitnessGoal" className="block text-lg font-medium text-gray-700 mb-2">
            What are your primary fitness goals?
          </label>
          <select
            id="fitnessGoal"
            name="fitnessGoal"
            value={formData.fitnessGoal}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Select your fitness goal
            </option>
            <option value="weightLoss">Weight Loss</option>
            <option value="muscleGain">Muscle Gain</option>
            <option value="endurance">Endurance Improvement</option>
            <option value="flexibility">Flexibility Enhancement</option>
            <option value="overallHealth">Overall Health</option>
          </select>
        </div>

        {/* Fitness Level */}
        <div className="mb-6">
          <label htmlFor="fitnessLevel" className="block text-lg font-medium text-gray-700 mb-2">
            What is your current fitness level?
          </label>
          <select
            id="fitnessLevel"
            name="fitnessLevel"
            value={formData.fitnessLevel}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Select your fitness level
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Workout Days */}
        <div className="mb-6">
          <label htmlFor="workoutDays" className="block text-lg font-medium text-gray-700 mb-2">
            How many days per week can you commit to exercising?
          </label>
          <input
            type="number"
            id="workoutDays"
            name="workoutDays"
            value={formData.workoutDays}
            onChange={handleInputChange}
            min={1}
            max={7}
            className="w-full border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Session Duration */}
        <div className="mb-6">
          <label htmlFor="sessionDuration" className="block text-lg font-medium text-gray-700 mb-2">
            How much time (in minutes) can you dedicate to each workout session?
          </label>
          <input
            type="number"
            id="sessionDuration"
            name="sessionDuration"
            value={formData.sessionDuration}
            onChange={handleInputChange}
            min={15}
            max={120}
            step={15}
            className="w-full border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Equipment Access */}
        <div className="mb-6">
          <label htmlFor="equipmentAccess" className="block text-lg font-medium text-gray-700 mb-2">
            Do you have access to any equipment?
          </label>
          <select
            id="equipmentAccess"
            name="equipmentAccess"
            value={formData.equipmentAccess}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Select equipment access
            </option>
            <option value="gymEquipment">Gym Equipment</option>
            <option value="freeWeights">Free Weights</option>
            <option value="resistanceBands">Resistance Bands</option>
            <option value="cardioMachines">Cardio Machines</option>
            <option value="bodyweight">No Equipment (Bodyweight Exercises)</option>
          </select>
        </div>

        {/* Physical Limitations */}
        <div className="mb-6">
          <label htmlFor="physicalLimitations" className="block text-lg font-medium text-gray-700 mb-2">
            Are there any physical limitations or medical conditions we should be aware of?
          </label>
          <textarea
            id="physicalLimitations"
            name="physicalLimitations"
            value={formData.physicalLimitations}
            onChange={handleInputChange}
            rows={3}
            className="w-full border-gray-300 rounded-md"
            placeholder="Please describe any limitations or enter 'None'"
          />
        </div>

        {/* Preferred Exercises */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            What types of exercise do you enjoy? (Select all that apply)
          </label>
          <div className="flex flex-wrap">
            {['Cardio', 'Strength Training', 'HIIT', 'Yoga', 'Pilates', 'Sports'].map((exercise) => (
              <label key={exercise} className="mr-4 mb-2">
                <input
                  type="checkbox"
                  name="preferredExercises"
                  value={exercise}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {exercise}
              </label>
            ))}
          </div>
        </div>

        {/* Workout Environment */}
        <div className="mb-6">
          <label htmlFor="workoutEnvironment" className="block text-lg font-medium text-gray-700 mb-2">
            What is your preferred workout environment?
          </label>
          <select
            id="workoutEnvironment"
            name="workoutEnvironment"
            value={formData.workoutEnvironment}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Select your workout environment
            </option>
            <option value="gym">Gym</option>
            <option value="home">Home</option>
            <option value="outdoors">Outdoors</option>
          </select>
        </div>

        {/* Focus Areas */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Do you have any specific areas you want to focus on? (Select all that apply)
          </label>
          <div className="flex flex-wrap">
            {['Upper Body', 'Lower Body', 'Core', 'Full Body Workouts'].map((area) => (
              <label key={area} className="mr-4 mb-2">
                <input
                  type="checkbox"
                  name="focusAreas"
                  value={area}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {area}
              </label>
            ))}
          </div>
        </div>

        {/* Previous Experience */}
        <div className="mb-6">
          <label htmlFor="previousExperience" className="block text-lg font-medium text-gray-700 mb-2">
            Have you followed any workout plans before? If so, what worked or didn't work for you?
          </label>
          <textarea
            id="previousExperience"
            name="previousExperience"
            value={formData.previousExperience}
            onChange={handleInputChange}
            rows={3}
            className="w-full border-gray-300 rounded-md"
            placeholder="Share your previous experience or enter 'None'"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
            disabled={loading}
          >
            {loading ? 'Generating Plan...' : 'Generate My Workout Plan'}
          </button>
        </div>
      </form>

      {/* Display Workout Plan */}
      {workoutPlan && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
            Your Personalized Workout Plan
          </h2>
          <div className="bg-white p-6 rounded-md shadow-md">
            <p>{workoutPlan}</p>
            {/* In a real application, you would render the detailed workout plan here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutPlanPage;
