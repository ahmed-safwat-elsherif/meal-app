import React, { useCallback } from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text, Pressable, Platform } from "react-native";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { fontSize } from "../../utils/theme";

const MealItem = ({
  id,
  title,
  affordability,
  complexity,
  imageUrl,
  duration,
}) => {
  const { navigate } = useNavigation();
  const onNavigate = useCallback(
    () => navigate("MealDetails", { mealId: id }),
    [navigate, id]
  );
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed
            ? { ...styles.pressableArea, opacity: 0.5 }
            : styles.pressableArea
        }
        onPress={onNavigate}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.properties}>
          <View style={styles.property}>
            <Text>{duration}</Text>
            <MaterialCommunityIcons
              name="timer-settings"
              size={24}
              color="black"
            />
          </View>
          <View style={styles.property}>
            <Text>{affordability.toUpperCase()}</Text>
            <Entypo name="hand" size={24} color="black" />
          </View>
          <View style={styles.property}>
            <Text>{complexity.toUpperCase()}</Text>
            <FontAwesome5 name="dragon" size={24} color="black" />
          </View>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "gray",
    shadowOpacity: 0.5,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  imageContainer: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    overflow: "hidden",
  },
  title: {
    fontSize: fontSize(20),
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 10,
  },
  properties: {
    flexDirection: "row",
    gap: 5,
    paddingVertical: 10,
    flexWrap: "wrap",
  },
  property: {
    flex: 1,
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  pressableArea: {
    flex: 1,
  },
});

export default MealItem;
