import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LogoutScreen from "../screens/LogoutScreen";
import CommunityScreen from "../screens/CommunityScreen";
import AboutScreen from "../screens/AboutScreen";
import { AuthContext } from "../hooks/useAuth";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const bgGlobalTheme = DefaultTheme;
bgGlobalTheme.colors.background = "#1d5a91";

const bgDrawerTheme = "#5db0f9";

function DrawerNavigator() {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);
  return (
    <NavigationContainer theme={bgGlobalTheme}>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: bgDrawerTheme,
          },
        }}
      >
        {isLoggedIn ? (
          <>
            <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
            <Drawer.Screen name="Profile" component={MyProfileScreen}></Drawer.Screen>
            <Drawer.Screen name="Community" component={CommunityScreen}></Drawer.Screen>
            <Drawer.Screen name="About" component={AboutScreen}></Drawer.Screen>
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
