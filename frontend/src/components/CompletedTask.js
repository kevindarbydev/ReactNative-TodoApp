import { View, Text, Image } from "react-native";
import React from "react";

const CompletedTask = (props) => {
  return (
    <View className="flex-row p-3 items-center mx-4 my-4 space-x-2 bg-slate-600 rounded-lg">
      
      <View className="flex-1">
        <Text className=" text-white font-bold">{props.task}</Text>
        
      </View>
    
    </View>
  );
};

export default CompletedTask;
