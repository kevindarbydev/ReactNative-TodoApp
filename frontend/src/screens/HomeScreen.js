import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
import Info from "../components/Info";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  // Removes default header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const navigation = useNavigation();

  // From Tut:
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  // Wrapped the whole thing in an async await function
  // Store ----------------------------
  const storeLevel = async () => {
    console.log("storing level: " + level);
    await AsyncStorage.setItem("level", JSON.stringify(level));
  };

  const storeXp = async () => {
    console.log("storing xp: " + xp);
    await AsyncStorage.setItem("xp", JSON.stringify(xp));
  };

  // Retrieve ----------------------------
  const retrieveLevel = async () => {
    const value = await AsyncStorage.getItem("level");
    console.log("Retrieving level: " + value);
  };

  const retrieveXp = async () => {
    const value = await AsyncStorage.getItem("xp");
    console.log("Retrieving xp: " + value);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    setXp(xp + 20);

    if (xp === 80) {
      setLevel(level + 1);
      setXp(0);
    }
    // storing level and xp when task completed
    storeLevel();
    storeXp();
  };

  // console logging level and xp every time HomeScreen rerenders
  retrieveLevel();
  retrieveXp();

  // Trying to store level and xp in storage (localStorage and sessionStorage do not work in React-Native)
  // AsyncStorage.setItem('level', level.toString());
  // AsyncStorage.setItem('xp', xp.toString());
  // Getting the items from the storage is giving issues because it returns an Object Array (if anyone can figure out how to make it work go ahead)
  //const currentLevel = AsyncStorage.getItem('level');
  //const currentXp = AsyncStorage.getItem('xp');

  return (
    <View className="flex-1 bg-gray-200">
      {/* Today's task */}
      <View className="pt-10 px-5">
        <LevelBar level={level} xp={xp} />
        <Info />
        <Text className="text-2xl font-bold text-center">Today's Tasks</Text>
        <View className="mt-8">
          {/* This is where the tasks will go */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
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
          onChangeText={(text) =>
            text === null ? console.log("error") : setTask(text)
          }
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
