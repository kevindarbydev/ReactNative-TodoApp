import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LogoutScreen from "../screens/LogoutScreen";
import { AuthContext } from "../hooks/useAuth";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {isLoggedIn ? (
          <>
            <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
            <Drawer.Screen name="Profile" component={MyProfileScreen}></Drawer.Screen>
            <Drawer.Screen name="Log Out" component={LogoutScreen}></Drawer.Screen>
          </>
        ) : (
          <>
            <Drawer.Screen name="Login" component={LoginScreen}></Drawer.Screen>
            <Drawer.Screen name="Register" component={RegisterScreen}></Drawer.Screen>
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
