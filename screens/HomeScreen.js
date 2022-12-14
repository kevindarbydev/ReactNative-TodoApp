import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  // Removes default header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={require("../assets/checkmark.png")} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
        <View>
          <Text>My To-Do List!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
