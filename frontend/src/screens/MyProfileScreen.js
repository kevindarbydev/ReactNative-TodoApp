import { View, Text, FlatList } from "react-native";
import React from "react";

const MyProfileScreen = () => {
  return (
    <View
      className="flex-1 bg-gray-200 items-center"
      // contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
    >
      <Text className="font-bold text-2xl mt-5">Completed Tasks</Text>
      <FlatList // hardcoded for now
        data={[{ key: "Walk the cat" }]}
        renderItem={({ item }) => (
          <Text className="text-base mt-2">{item.key} ✔ </Text>
        )}
      />
     
    </View>
  );
};

export default MyProfileScreen;
