import { View, Text } from "react-native";
import React from "react";

const CommunityUserCard = (props) => {
  return (
    <View>
      <Text>CommunityUserCard</Text>
      <Text>{props.email}</Text>
      <Text>{props.level}</Text>
      <Text>{props.xp}</Text>
    </View>
  );
};

export default CommunityUserCard;
