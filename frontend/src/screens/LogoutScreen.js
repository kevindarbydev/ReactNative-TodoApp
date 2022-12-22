import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../hooks/useAuth";

export default function LogoutButton() {
  const { setIsLoggedIn, setUser } = React.useContext(AuthContext);

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUser([]);
  };

  return (
    <View className="m-10">
      <Text className="text-2xl font-bold text-center text-gray-50 mb-10">
        Are you sure you want to Log Out? You will not be able to access your Tasks once logged out.
      </Text>
      <TouchableOpacity
        onPress={handleLogOut}
        className="bg-blue-500 items-center w-full py-4 rounded-lg"
      >
        <Text className="text-white font-semibold text-base">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
