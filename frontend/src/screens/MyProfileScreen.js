import { View, Text, ScrollView } from "react-native";
import React from "react";

const MyProfileScreen = () => {
  return (
    
    <ScrollView className="flex-1 bg-gray-200">
      <Text className="font-semibold text-base mt-5">
        Here you can see your completed tasks!
      </Text>      
    </ScrollView>
  );
};

export default MyProfileScreen;
