import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { fontSize } from "../../utils/theme";

const CategoryCard = (props) => {
  const { title, color } = props;

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed
            ? { ...styles.pressableArea, opacity: 0.5 }
            : styles.pressableArea
        }
      >
        <View style={[styles.titleWrapper, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "gray",
    shadowOpacity: 0.5,
    margin: 10,
    alignItems: "stretch",
    minHeight: 150,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressableArea: {
    flex: 1,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  title: {
    fontSize: fontSize(20),
    textAlign: "center",
    fontWeight: "600",
  },
});

export default CategoryCard;
