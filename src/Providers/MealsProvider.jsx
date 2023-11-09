import { createContext, useCallback, useMemo, useState } from 'react';
import { MEALS } from '../utils/data';

export const MealsContext = createContext({
  meals: MEALS,
  favoriteMeals: MEALS,
  // eslint-disable-next-line no-unused-vars
  addToFav: (mealId) => {},
  // eslint-disable-next-line no-unused-vars
  removeFromFav: (mealId) => {},
});

export const MealsProvider = ({ children }) => {
  const [meals] = useState(MEALS);
  const [favIds, setFavIds] = useState([]);

  const favoriteMeals = useMemo(
    () => meals.filter((meal) => favIds.includes(meal.id)),
    [favIds, meals],
  );

  const addToFav = useCallback(
    (mealId) => setFavIds((prevIds) => (prevIds.includes(mealId) ? prevIds : [...prevIds, mealId])),
    [],
  );
  const removeFromFav = useCallback(
    (mealId) => setFavIds((prevIds) => prevIds.filter((id) => id !== mealId)),
    [],
  );

  const contextValue = useMemo(
    () => ({
      meals,
      favoriteMeals,
      addToFav,
      removeFromFav,
    }),
    [meals, favoriteMeals, addToFav, removeFromFav],
  );

  return <MealsContext.Provider value={contextValue}>{children}</MealsContext.Provider>;
};
