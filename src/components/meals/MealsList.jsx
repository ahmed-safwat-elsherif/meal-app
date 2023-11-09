import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

const renderItem = ({ item }) => <MealItem {...item} />;

const MealsList = ({ items }) => (
  <View style={styles.container}>
    <FlatList
      data={items}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    flex: 1,
    alignItems: 'center',
  },
  separatorLine: {
    borderTopColor: 'rgb(206 206 206)',
    borderTopWidth: 1,
    marginVertical: 10,
    width: '30%',
    marginHorizontal: 'auto',
  },
});

export default MealsList;
