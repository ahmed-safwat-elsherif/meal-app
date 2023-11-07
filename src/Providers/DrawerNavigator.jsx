import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesList from "../screens/CategoriesList";
import FavoritesList from "../screens/FavoritesList";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: "white",
      sceneContainerStyle: { backgroundColor: "#3f2f25" },
    }}
  >
    <Drawer.Screen
      name="CategoriesList"
      component={CategoriesList}
      options={{
        title: "Categories list",
      }}
    />
    <Drawer.Screen
      name="FavoritesList"
      component={FavoritesList}
      options={{
        title: "Favorite meals",
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
