import { useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react';
import useMeals from '../hooks/useMeals';
import MealsList from '../components/meals/MealsList';

const MealsOverview = () => {
  const { params } = useRoute();
  const { meals } = useMeals();
  const { categoryId } = params;

  const categoryMeals = useMemo(
    () => meals.filter((mealItem) => mealItem.categoryIds.includes(categoryId)),
    [meals, categoryId],
  );

  return <MealsList items={categoryMeals} />;
};

export default MealsOverview;
