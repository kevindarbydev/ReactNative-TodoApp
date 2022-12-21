import { View, Text, Image } from "react-native";
import React from "react";

const CommunityUserCard = (props) => {
  return (
    <View className="flex-row p-3 items-center mx-4 my-4 space-x-2 bg-slate-600 rounded-lg">
      <Image
        source={require("../assets/profile-pic.png")}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />
      <View className="flex-1">
        <Text className=" text-teal-300 font-bold">{props.username}</Text>
        <Text className=" text-white">LVL {props.level}</Text>
        <Text className="text-gray-400">Active since: {props.dateAccCreated}</Text>
      </View>
    </View>
  );
};

export default CommunityUserCard;
