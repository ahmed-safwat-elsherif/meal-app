import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "./src/components/shared/SafeAreaView";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CategoriesList from "./src/screens/CategoriesList";

const App = () => (
  <>
    <StatusBar style="light" />
    <SafeAreaProvider>
      <SafeAreaView>
        <CategoriesList />
      </SafeAreaView>
    </SafeAreaProvider>
  </>
);
export default App;
