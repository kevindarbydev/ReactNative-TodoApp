import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import useAuth from "../hooks/useAuth";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
      <Drawer.Screen name="Profile" component={MyProfileScreen}></Drawer.Screen>
      <Drawer.Screen name="Login" component={LoginScreen}></Drawer.Screen>
      <Drawer.Screen name="Register" component={RegisterScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

const StackNavigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator>
      {/* Screens */}
      {/* Empty div wrapping the first part of the conditional (no siblings rule) */}
      <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MyProfile" component={MyProfileScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
