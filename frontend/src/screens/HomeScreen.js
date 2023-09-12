import React, { useEffect, useState } from "react";
import axios, * as others from "axios";
import { AuthContext } from "../hooks/useAuth";
import { Platform, Text, TouchableOpacity, View } from "react-native";

import { API_URL2 } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const { user, setUser } = React.useContext(AuthContext);

  const saveTaskUrl = `${API_URL2}/todo/save`;
  const userUrl = `${API_URL2}/user/update/${user._id}`;

  // From Tut:
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const saveTask = (task) => {
    var today = new Date();
    console.log(task + " " + user._id);
    try {
      axios
        .post(saveTaskUrl, {
          task: task,
          userId: user._id,
          dateCompleted: today,
        })
        .then(function (response) {
          console.log("Response: " + response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View className="flex-1">
      {/* Today's task */}
      <View className="pt-10 px-5 ">
        <Text className="text-2xl font-bold text-center  text-gray-50">
          AWS Certified Developer Study App
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
