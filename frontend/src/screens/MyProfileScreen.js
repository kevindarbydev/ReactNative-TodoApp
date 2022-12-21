import { View, Text, FlatList, TouchableOpacity } from "react-native";
import axios, * as others from "axios";
import React, { useState, useEffect } from "react";
import { AuthContext } from "../hooks/useAuth";
import CompletedTask from "../components/CompletedTask";
const MyProfileScreen = () => {
  const { user } = React.useContext(AuthContext);
  const [completeTasks, setCompleteTasks] = useState([]);
  const url = `http://192.168.2.11:3001/todo/completed`;

  useEffect(() => {
    try {
      axios
        .post(url, {
          userId: user._id,
        })
        .then(function (response) {
          console.log(JSON.stringify(response.data.task));
          var taskArray = [];
          for (let taskObj of response.data) {
            console.log(taskObj.task);
            taskArray.push({
              task: taskObj.task,
              id: '',
              dateCompleted: taskObj.dateCompleted,
            });
          }
          setCompleteTasks(taskArray);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

const allCompletedTasks = completeTasks.map((task) => {
  return (
    <CompletedTask
      key={task._id}
      task={task.task}
      dateCompleted={task.dateCompleted}
    />
  );
})

  return (
    <View className="flex-1 items-center">
      {/* Testing retrieving user id from AuthContext after logging in  */}
      <Text> {user._id} </Text>
      <Text className="font-bold text-2xl mt-5">Completed Tasks</Text>
      {allCompletedTasks}
    </View>
  );
};

export default MyProfileScreen;
