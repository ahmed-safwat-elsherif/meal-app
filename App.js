import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SafeAreaView from "./src/components/shared/SafeAreaView";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CategoriesList from "./src/screens/CategoriesList";
import MealsOverview from "./src/screens/MealsOverview";
import { CATEGORIES, } from "./src/utils/data";
import MealDetails from "./src/screens/MealDetails";

const Stack = createNativeStackNavigator();

const App = () => (
  <>
    <StatusBar style="light" />
    <SafeAreaProvider>
      <SafeAreaView>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="CategoriesList"
              component={CategoriesList}
              options={{
                title: "Categories list",
                headerLargeTitle: "Categories list",
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverview}
              options={({ route }) => {
                const { categoryId } = route.params;
                const selectedCategory = CATEGORIES.find(
                  (cat) => cat.id === categoryId
                );
                return {
                  title: selectedCategory?.title,
                };
              }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetails}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  </>
);
export default App;
