import React from 'react';
import MealsList from '../components/meals/MealsList';
import useMeals from '../hooks/useMeals';
import { StyleSheet, Text, View } from 'react-native';
import { fontSize } from '../utils/theme';

const FavoritesList = () => {
  const { favoriteMeals } = useMeals();

  if (!favoriteMeals.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyMsg}>No favorite meals were added yet !</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyMsg: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: fontSize(20),
    fontStyle: 'italic',
    color: 'white',
  },
});

export default FavoritesList;
