import { View, Text, ScrollView } from "react-native";
import axios, * as others from "axios";
import React, { useState, useEffect } from "react";
import { AuthContext } from "../hooks/useAuth";
import CompletedTask from "../components/CompletedTask";
import { API_URL2 } from "@env";
const MyProfileScreen = () => {
  const { user } = React.useContext(AuthContext);
  const [completeTasks, setCompleteTasks] = useState([]);
  const url = `${API_URL2}/todo/completed`;

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
            // console.log("MPS: " + taskObj._id);
            taskArray.push({
              task: taskObj.task,
              _id: taskObj._id,
              userId: taskObj.userId,
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
    //console.log(task);
    if (user._id == task.userId) {
      return (
        <CompletedTask
          key={task._id}
          task={task.task}
          dateCompleted={task.dateCompleted}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <ScrollView className="flex-1"
      contentContainerStyle="center">
      <Text className="font-bold text-2xl mt-5">Completed Tasks</Text>
      {allCompletedTasks}
    </ScrollView>
  );
};

export default MyProfileScreen;
