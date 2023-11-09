import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesList from '../screens/CategoriesList';
import FavoritesList from '../screens/FavoritesList';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
    }}>
    <Drawer.Screen
      name="CategoriesList"
      component={CategoriesList}
      options={{
        title: 'Categories list',
        drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
      }}
    />
    <Drawer.Screen
      name="FavoritesList"
      component={FavoritesList}
      options={{
        title: 'Favorite meals',
        drawerIcon: ({ color, size }) => <Ionicons name="heart" color={color} size={size} />,
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
