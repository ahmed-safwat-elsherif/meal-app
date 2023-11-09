import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../utils/data';
import CategoryCard from '../components/categories/CategoryCard';

const renderItem = ({ item }) => <CategoryCard {...item} />;

const CategoriesList = () => (
  <View style={styles.container}>
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoriesList;
