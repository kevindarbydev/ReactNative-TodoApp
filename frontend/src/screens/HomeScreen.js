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
import Info from "../components/Info";
import { API_URL } from "@env";

const HomeScreen = () => {
  const { user, setUser } = React.useContext(AuthContext);

  //Trying to refresh the user here (but for some reason, the xp is not being save in the DB)
  useEffect(() => {
    setUser(user);
  }, [user]);

  const saveTaskUrl = `${API_URL}/todo/save`;
  const userUrl = `${API_URL}/user/update/${user._id}`;

  // From Tut:
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  let currentLevel = user.level;
  let currentXp = user.xp;

  // Was testing out useEffect here ----- but doesn't really make sense
  // useEffect(() => {
  //   setXp((prevState) => {
  //     prevState + 20;
  //   });
  //   if (xp === 80) {
  //     setLevel((prevState) => {
  //       prevState + 1;
  //     });
  //     setXp(0);
  //   }
  // }, [xp, level]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
    // Was using this for debugging another problem (Resolved)
    // console.log("CurrentLevel: " + level + " & CurrentXp: " + xp);
    // console.log("Current logged in user info --> ID:" + user._id + ", Username: " + user.username);
  };

  const completeTask = async (index, task) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    saveTask(task);

    currentXp = currentXp + 20;
    if (currentXp === 80) {
      currentLevel = currentLevel + 1;
      currentXp = 0;
    }

    await fetch(userUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        level: currentLevel,
        xp: currentXp,
        email: user.email,
        password: user.password,
        username: user.username,
      }),
    })
      .then((data) => data.json())
      .then((json) => {
        if (json.success === true) {
          try {
            alert("Level and XP have been updated to LVL: " + currentLevel + ", XP: " + currentXp);
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
      <View className="pt-10 px-5">
        <LevelBar level={currentLevel} xp={currentXp} />
        <Info />
        <Text className="text-2xl font-bold text-center">Today's Tasks</Text>
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
