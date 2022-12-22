import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { API_URL2 } from "@env";
import CommunityUserCard from "../components/CommunityUserCard";

const CommunityScreen = () => {
  const [allUsers, setAllUsers] = useState([]);
  const url = `${API_URL2}/user`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, []);

  const allUsersElements = allUsers.map((user) => {
    return (
      <CommunityUserCard
        key={user._id}
        level={user.level}
        username={user.username}
        dateAccCreated={user.dateAccCreated}
      />
    );
  });

  return (
    <ScrollView>
      <View className="mt-5">{allUsersElements}</View>
    </ScrollView>
  );
};

export default CommunityScreen;
