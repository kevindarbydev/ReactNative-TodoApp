import { View, Text } from "react-native";
import React from "react";

const MyProfileScreen = () => {
  return (
    <View className="flex-1 bg-gray-200 items-center">
      <Text className="font-semibold text-base mt-5">
        Here you can see your completed tasks!
      </Text>
    </View>
  );
};

export default MyProfileScreen;
