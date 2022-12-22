import React, { useEffect, useState } from "react";
import axios, * as others from "axios";
import { AuthContext } from "../hooks/useAuth";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "../components/Task";
import LevelBar from "../components/LevelBar";

import { API_URL2 } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const { user, setUser } = React.useContext(AuthContext);

  const saveTaskUrl = `${API_URL2}/todo/save`;
  const userUrl = `${API_URL2}/user/update/${user._id}`;

  // From Tut:
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const currentLevel = Number(user.level);
  const currentXp = Number(user.xp);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = async (index, task) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    saveTask(task);

    user.xp = (currentXp + 20).toString();

    if (user.xp === "100") {
      user.level = (currentLevel + 1).toString();
      user.xp = "0";
    }

    alert(user._id);
    await fetch(userUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        _id: user._id,
        level: user.level,
        xp: user.xp,
        email: user.email,
        password: user.password,
        username: user.username,
      }),
    })
      .then((data) => data.json())
      .then((json) => {
        if (json.success === true) {
          try {
            // alert("Level and XP have been updated to LVL: " + user.level + ", XP: " + user.xp);
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("Update failed: " + json.success);
        }
      })
      .catch((error) => console.log(error));
  };

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
        <LevelBar level={currentLevel} xp={currentXp} />

        <Text className="text-2xl font-bold text-center  text-gray-50">Today's Tasks</Text>
        <View className="mt-8">
          {/* This is where the tasks will go */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index, item)}>
                <Task text={item} xp="20" />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Write a Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="absolute bottom-14 flex-row justify-around items-center w-full"
      >
        <TextInput
          className="bg-white w-60 py-4 px-4 rounded-full border-zinc-300 border"
          placeholder={"Write a Task"}
          onChangeText={(text) => (text === null ? console.log("error") : setTask(text))}
          value={task}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View className="w-16 h-16 bg-white rounded-full justify-center items-center border-zinc-300 border">
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;