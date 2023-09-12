import React from "react";
import HomeScreen from "../screens/HomeScreen";
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
            <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
         
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
