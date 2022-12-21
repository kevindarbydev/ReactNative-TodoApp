import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { API_URL } from "@env";
import CommunityUserCard from "../components/CommunityUserCard";

const CommunityScreen = () => {
  const [allUsers, setAllUsers] = useState([]);
  const url = `${API_URL}/user`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, []);

  const allUsersElements = allUsers.map((user) => {
    return <CommunityUserCard key={user._id} email={user.email} level={user.level} />;
  });

  return (
    <ScrollView>
      <View className="mt-5">{allUsersElements}</View>
    </ScrollView>
  );
};

export default CommunityScreen;
