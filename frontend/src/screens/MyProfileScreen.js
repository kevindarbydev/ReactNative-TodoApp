import { View, Text, FlatList } from "react-native";
import React from "react";
import { AuthContext } from "../hooks/useAuth";

const MyProfileScreen = () => {
  const { user } = React.useContext(AuthContext);
  return (
    <View
      className="flex-1 items-center"
      // contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
    >
      {/* Testing retrieving user id from AuthContext after logging in  */}
      <Text> {user._id} </Text>
      <Text className="font-bold text-2xl mt-5">Completed Tasks</Text>
      <FlatList // hardcoded for now
        data={[{ key: "Walk the cat" }]}
        renderItem={({ item }) => <Text className="text-base mt-2">{item.key} ✔ </Text>}
      />
    </View>
  );
};

export default MyProfileScreen;
