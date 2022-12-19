import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
//import  { auth }  from "../../firebase";

const LoginScreen = () => {
  // basic login screen, vanilla css. will refactor to tailwind later
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* const handleSignup = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(err => { alert(err.message)});
  } */
  return (
    <KeyboardAvoidingView
      className="flex-1 items-center justify-center"
      behavior="padding"
    >
      <View className="w-50">
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          className="bg-white px-10 py-15 rounded-lg mt-5"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          className="bg-white px-10 py-15 rounded-lg mt-5"
          secureTextEntry
        />
      </View>
      <View className="w-60 items-center justify-center mt-10">
        <TouchableOpacity
          onPress={() => {}}
          className="bg-blue-500 items-center w-full py-4 rounded-lg"
        >
          <Text className="text-white font-semibold text-base">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //onPress={handleSignup}
          className="bg-white items-center w-full mt-1 py-4 rounded-lg border-blue-500 border-2"
        >
          <Text className="text-blue-500 font-semibold text-base">
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
