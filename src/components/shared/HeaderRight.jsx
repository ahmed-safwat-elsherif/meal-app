import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderRight = ({ isFavorite, onPress }) => (
  <View
    style={{
      minWidth: 24,
      minHeight: 24,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Pressable onPress={onPress}>
      {isFavorite ? (
        <Ionicons name="heart-sharp" size={24} color="red" />
      ) : (
        <Ionicons name="heart-outline" size={24} color="red" />
      )}
    </Pressable>
  </View>
);

export default HeaderRight;
