import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View className="bg-white p-4 rounded-lg flex-row items-center justify-between mb-5">
      <View className="flex-row items-center flex-wrap">
        <TouchableOpacity className="w-6 h-6 bg-[#55BCF6] opacity-40 rounded-md mr-4"></TouchableOpacity>
        <Text className="max-w-[80%]">{props.text}</Text>
      </View>
      <View className="w-3 h-3 border-[#55BCF6] border-2 rounded-full"></View>
    </View>
  );
};

export default Task;
