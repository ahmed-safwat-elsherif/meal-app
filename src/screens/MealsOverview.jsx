import { useRoute } from "@react-navigation/native";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native";
import MealItem from "../components/meals/MealItem";
import useMeals from "../hooks/useMeals";

const renderItem = ({ item }) => <MealItem {...item} />;

const MealsOverview = () => {
  const { params } = useRoute();
  const { meals } = useMeals();
  const { categoryId } = params;

  const categoryMeals = useMemo(
    () => meals.filter((mealItem) => mealItem.categoryIds.includes(categoryId)),
    [meals, categoryId]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={
          <View style={styles.separator}>
            <View style={styles.separatorLine} />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    flex: 1,
    alignItems: "center",
  },
  separatorLine: {
    borderTopColor: "rgb(206 206 206)",
    borderTopWidth: 1,
    marginVertical: 10,
    width: "30%",
    marginHorizontal: "auto",
  },
});

export default MealsOverview;
