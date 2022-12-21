import "react-native-gesture-handler"; // needs to be at the top
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/hooks/useAuth";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <DrawerNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
