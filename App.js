import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SafeAreaView from "./src/components/shared/SafeAreaView";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MealsOverview from "./src/screens/MealsOverview";
import { CATEGORIES } from "./src/utils/data";
import MealDetails from "./src/screens/MealDetails";
import DrawerNavigator from "./src/Providers/DrawerNavigator";
import { MealsProvider } from "./src/Providers/MealsProvider";

const Stack = createNativeStackNavigator();
const App = () => (
  <>
    <StatusBar style="light" />
    <SafeAreaProvider>
      <SafeAreaView>
        <MealsProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "white",
                contentStyle: { backgroundColor: "#3f2f25" },
              }}
            >
              <Stack.Screen
                name="HomeDrawer"
                component={DrawerNavigator}
                options={{
                  title: "Categories list",
                  headerShown: false,
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
                    headerBackTitle: "Categories list",
                    title: selectedCategory?.title,
                  };
                }}
              />
              <Stack.Screen name="MealDetails" component={MealDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </MealsProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  </>
);
export default App;
