import React, { useCallback } from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderRight = ({ isFavorite, onSwitch }) => {
  const handleClick = useCallback(() => onSwitch(!isFavorite), []);

  return (
    <View style={{ minWidth:24, minHeight:24, justifyContent:'center', alignItems:'center'}}>
    <Pressable onPress={handleClick}>
      {isFavorite ? (
        <Ionicons name="heart-sharp" size={24} color="red" />
      ) : (
        <Ionicons name="heart-outline" size={24} color="red" />
      )}
    </Pressable>
    </View>
  );
};

export default HeaderRight;
