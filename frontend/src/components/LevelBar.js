import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function LevelBar(props) {
  return (
    <View>
      <View>
        <Text className="font-bold text-center  text-gray-50 ">
          Level {props.level}: {props.xp}/100xp
        </Text>
      </View>
      <View className="w-full bg-white h-2 rounded-full mb-5 mt-2">
        <TextInput
          className="bg-blue-600 h-2 font-bold text-center rounded-full"
          style={{ width: props.xp + "%" }}
        />
      </View>
    </View>
  );
}
