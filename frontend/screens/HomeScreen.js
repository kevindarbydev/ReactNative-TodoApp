import { View, Text, SafeAreaView, Image, Button } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import client from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  // Removes default header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    client.fetch(`*[_type == "user"]`).then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <SafeAreaView>
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require("../assets/checkmark.png")}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
          <Text>My To-Do List!</Text>
          <Button
            title="Go to Profile Page"
            onPress={() => navigation.navigate("MyProfile")}
          />
        </View>
      </View>
      <View>
        {users.map((user) => (
          <Text key={user._id}>{user.email}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
