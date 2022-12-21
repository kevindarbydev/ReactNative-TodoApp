import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import useAuth from "../hooks/useAuth";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const { isLoggedIn } = useAuth();
  return (
    <Drawer.Navigator>
      {isLoggedIn ? (
        <>
          <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
          <Drawer.Screen name="Profile" component={MyProfileScreen}></Drawer.Screen>
        </>
      ) : (
        <>
          <Drawer.Screen name="Login" component={LoginScreen}></Drawer.Screen>
          <Drawer.Screen name="Register" component={RegisterScreen}></Drawer.Screen>
        </>
      )}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
