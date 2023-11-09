import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MealSection = ({ title, items }) => (
  <View style={{ justifyContent: 'center' }}>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
      }}>
      <View style={[styles.sectionLine, { width: 100 }]} />
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.sectionLine, { width: 100 }]} />
      <View style={[styles.sectionLine, { width: 75 }]} />
      <View style={styles.sectionLine} />
    </View>
    <View style={{ marginHorizontal: 'auto', paddingHorizontal: 10 }}>
      {items.map((ingredient) => (
        <View key={ingredient} style={styles.item}>
          <Text style={styles.itemText}>{ingredient}</Text>
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: { fontSize: 20, color: 'white', fontWeight: '600' },
  sectionLine: {
    borderTopColor: 'white',
    borderWidth: 1,
    width: 50,
    opacity: 0.5,
    marginTop: 5,
  },
  item: {
    backgroundColor: '#E6BBB1',
    marginVertical: 5,
    borderRadius: 4,
    padding: 4,
  },
  itemText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default MealSection;
