import React, { useCallback, useLayoutEffect, useMemo } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import MealSection from '../components/meals/MealSection';
import HeaderRight from '../components/shared/HeaderRight';
import useMeals from '../hooks/useMeals';

const MealDetails = () => {
  const { setOptions } = useNavigation();
  const { params } = useRoute();
  const { favoriteMeals, addToFav, removeFromFav, meals } = useMeals();
  const { mealId } = params;

  const meal = useMemo(() => meals.find((mealItem) => mealItem.id === mealId), [mealId, meals]);
  const { affordability, imageUrl, duration, ingredients, steps, isVegan, id } = meal;

  const isFavorite = useMemo(
    () => favoriteMeals.map(({ id }) => id).includes(mealId),
    [favoriteMeals, mealId],
  );

  const handleToggleFav = useCallback(() => {
    if (isFavorite) {
      removeFromFav(id);
      return;
    }
    addToFav(id);
  }, [isFavorite, addToFav, removeFromFav, id]);

  useLayoutEffect(() => {
    setOptions({
      title: meal?.title,
      headerRight: () => <HeaderRight isFavorite={isFavorite} onPress={handleToggleFav} />,
    });
  }, [setOptions, meal, isFavorite, handleToggleFav]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.heroSection}>
          <View style={[styles.property, { position: 'absolute', zIndex: 2, top: 10, right: 10 }]}>
            <Text>{duration} min</Text>
            <MaterialCommunityIcons name="timer-settings" size={24} color="black" />
          </View>
          <Image source={{ uri: imageUrl }} style={{ width: '100%', height: '100%' }} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'flex-start',
            margin: 10,
          }}>
          <View style={styles.property}>
            <Text>{affordability.toUpperCase()}</Text>
            <Entypo name="hand" size={24} color="black" />
          </View>
          {isVegan && (
            <View style={styles.property}>
              <Text>Vegan</Text>
              <MaterialCommunityIcons name="food-apple" size={24} color="black" />
            </View>
          )}
        </View>
        <View style={{ margin: 10, gap: 20 }}>
          <MealSection title="Ingredients" items={ingredients} />
          <MealSection title="Steps" items={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  heroSection: {
    flex: 1,
    position: 'relative',
    maxHeight: 400,
  },
  property: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default MealDetails;
