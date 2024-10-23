// src/pages/DietRecommendationPage.tsx

import React, { useState } from 'react';

interface DietPlanFormData {
  dietaryGoal: string;
  activityLevel: string;
  dietaryRestrictions: string[];
  foodPreferences: string;
  mealsPerDay: number;
  dailySchedule: string;
  healthConditions: string;
  height: number;
  weight: number;
  age: number;
  gender: string;
  currentDiet: string;
  mealPrepTime: string;
}

interface Meal {
  name: string;
  description: string;
}

interface DailyMeals {
  day: string;
  breakfast: Meal;
  lunch: Meal;
  snack: Meal;
  dinner: Meal;
}

const DietRecommendationPage: React.FC = () => {
  const [formData, setFormData] = useState<DietPlanFormData>({
    dietaryGoal: '',
    activityLevel: '',
    dietaryRestrictions: [],
    foodPreferences: '',
    mealsPerDay: 3,
    dailySchedule: '',
    healthConditions: '',
    height: 0,
    weight: 0,
    age: 0,
    gender: '',
    currentDiet: '',
    mealPrepTime: '',
  });

  const [dietPlan, setDietPlan] = useState<DailyMeals[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prevData) => {
        const updatedArray = prevData[
          name as keyof DietPlanFormData
        ] as string[];
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
        [name]:
          type === 'number' ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mocking an API call to generate the diet plan
    try {
      // Replace this with your actual API call
      const response = await new Promise<{ data: DailyMeals[] }>((resolve) =>
        setTimeout(
          () =>
            resolve({
              data: generateMockDietPlan(),
            }),
          2000,
        ),
      );

      setDietPlan(response.data);
    } catch (error) {
      console.error('Error generating diet plan:', error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  // Mock function to generate a diet plan
  const generateMockDietPlan = (): DailyMeals[] => {
    const daysOfWeek = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    return daysOfWeek.map((day) => ({
      day,
      breakfast: {
        name: 'Oatmeal with Fruits',
        description: 'A healthy bowl of oatmeal topped with fresh fruits.',
      },
      lunch: {
        name: 'Grilled Chicken Salad',
        description:
          'Mixed greens with grilled chicken, cherry tomatoes, and vinaigrette.',
      },
      snack: {
        name: 'Greek Yogurt',
        description: 'A cup of low-fat Greek yogurt with honey.',
      },
      dinner: {
        name: 'Baked Salmon with Quinoa',
        description:
          'Oven-baked salmon served with quinoa and steamed vegetables.',
      },
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12 font-nunito">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        Personalized Diet Plan
      </h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        {/* Dietary Goal */}
        <div className="mb-6">
          <label
            htmlFor="dietaryGoal"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            What is your primary dietary goal?
          </label>
          <select
            id="dietaryGoal"
            name="dietaryGoal"
            value={formData.dietaryGoal}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Select your dietary goal
            </option>
            <option value="weightLoss">Weight Loss</option>
            <option value="weightGain">Weight Gain</option>
            <option value="muscleBuilding">Muscle Building</option>
            <option value="maintenance">Maintenance</option>
            <option value="healthImprovement">Improving Health Conditions</option>
          </select>
        </div>

        {/* Activity Level */}
        <div className="mb-6">
          <label
            htmlFor="activityLevel"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            What is your current activity level?
          </label>
          <select
            id="activityLevel"
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Select your activity level
            </option>
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="lightlyActive">
              Lightly Active (1-3 days/week)
            </option>
            <option value="moderatelyActive">
              Moderately Active (3-5 days/week)
            </option>
            <option value="veryActive">
              Very Active (6-7 days/week)
            </option>
            <option value="extraActive">
              Extra Active (very hard exercise & physical job)
            </option>
          </select>
        </div>

        {/* Dietary Restrictions */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Do you have any dietary restrictions or allergies? (Select all that
            apply)
          </label>
          <div className="flex flex-wrap">
            {[
              'Vegetarian',
              'Vegan',
              'Gluten-Free',
              'Lactose Intolerant',
              'Nut Allergies',
              'Shellfish Allergies',
            ].map((restriction) => (
              <label key={restriction} className="mr-4 mb-2">
                <input
                  type="checkbox"
                  name="dietaryRestrictions"
                  value={restriction}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {restriction}
              </label>
            ))}
          </div>
        </div>

        {/* Food Preferences */}
        <div className="mb-6">
          <label
            htmlFor="foodPreferences"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            What are your food preferences?
          </label>
          <textarea
            id="foodPreferences"
            name="foodPreferences"
            value={formData.foodPreferences}
            onChange={handleInputChange}
            rows={3}
            className="w-full border-gray-300 rounded-md"
            placeholder="List your favorite cuisines, foods you enjoy, and any dislikes"
          />
        </div>

        {/* Meals Per Day */}
        <div className="mb-6">
          <label
            htmlFor="mealsPerDay"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            How many meals do you prefer per day?
          </label>
          <select
            id="mealsPerDay"
            name="mealsPerDay"
            value={formData.mealsPerDay}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Select number of meals
            </option>
            <option value={3}>3 meals</option>
            <option value={5}>3 meals and 2 snacks</option>
            <option value={5}>5 smaller meals</option>
          </select>
        </div>

        {/* Daily Schedule */}
        <div className="mb-6">
          <label
            htmlFor="dailySchedule"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            What is your typical daily schedule?
          </label>
          <textarea
            id="dailySchedule"
            name="dailySchedule"
            value={formData.dailySchedule}
            onChange={handleInputChange}
            rows={3}
            className="w-full border-gray-300 rounded-md"
            placeholder="Describe your wake-up time, meal times, work hours, and sleep time"
          />
        </div>

        {/* Health Conditions */}
        <div className="mb-6">
          <label
            htmlFor="healthConditions"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Do you have any specific health conditions or medical concerns?
          </label>
          <textarea
            id="healthConditions"
            name="healthConditions"
            value={formData.healthConditions}
            onChange={handleInputChange}
            rows={3}
            className="w-full border-gray-300 rounded-md"
            placeholder="For example, high blood pressure, diabetes, etc."
          />
        </div>

        {/* Physical Stats */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Height */}
          <div>
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
              value={formData.height}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Weight */}
          <div>
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
              value={formData.weight}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Age */}
          <div>
            <label
              htmlFor="age"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Age (years)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md"
              required
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other / Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* Current Diet */}
        <div className="mb-6">
          <label
            htmlFor="currentDiet"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Are you currently following any diet plan?
          </label>
          <textarea
            id="currentDiet"
            name="currentDiet"
            value={formData.currentDiet}
            onChange={handleInputChange}
            rows={3}
            className="w-full border-gray-300 rounded-md"
            placeholder="Provide details on any past or current diet plans"
          />
        </div>

        {/* Meal Preparation Time */}
        <div className="mb-6">
          <label
            htmlFor="mealPrepTime"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            How much time can you dedicate to meal preparation each day?
          </label>
          <select
            id="mealPrepTime"
            name="mealPrepTime"
            value={formData.mealPrepTime}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Select meal preparation time
            </option>
            <option value="less15">Less than 15 minutes</option>
            <option value="15to30">15-30 minutes</option>
            <option value="30to60">30-60 minutes</option>
            <option value="more60">More than 1 hour</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
            disabled={loading}
          >
            {loading ? 'Generating Plan...' : 'Generate My Diet Plan'}
          </button>
        </div>
      </form>

      {/* Display Diet Plan */}
      {dietPlan && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
            Your Personalized Diet Plan
          </h2>
          <div className="bg-white p-6 rounded-md shadow-md">
            {dietPlan.map((dailyMeals) => (
              <div key={dailyMeals.day} className="mb-8">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  {dailyMeals.day}
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong>Breakfast:</strong> {dailyMeals.breakfast.name} -{' '}
                    {dailyMeals.breakfast.description}
                  </li>
                  <li>
                    <strong>Lunch:</strong> {dailyMeals.lunch.name} -{' '}
                    {dailyMeals.lunch.description}
                  </li>
                  <li>
                    <strong>Snack:</strong> {dailyMeals.snack.name} -{' '}
                    {dailyMeals.snack.description}
                  </li>
                  <li>
                    <strong>Dinner:</strong> {dailyMeals.dinner.name} -{' '}
                    {dailyMeals.dinner.description}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DietRecommendationPage;
