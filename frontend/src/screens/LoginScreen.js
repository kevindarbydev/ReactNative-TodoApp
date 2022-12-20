import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Formik } from "formik";


const LoginScreen = () => {
  //<yourIPhere>
  const navigation = useNavigation();
  const url = "http://192.168.2.11:3001/user/login";

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        console.log("(Login) email: " + values.email);
        console.log("(Login)pw: " + values.password);
        fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        })
          .then((data) => data.json())
          .then((json) => {
            if (json.success === true) {
              try {
                alert("Successfully logged in... redirecting to homepage");
                navigation.navigate("Home");
              } catch (error) {
                console.log(error);
              }
            } else {
              console.log("Login failed: " + json.success);
            }
          })
          .catch((error) => console.log(error));
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <KeyboardAvoidingView className="flex-1 items-center justify-center">
          <View className="w-50">
            <TextInput
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              className="bg-white h-16 px-10 py-15 rounded-lg mt-5"
            />
            <TextInput
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              className="bg-white px-10 py-5 rounded-lg mt-5"
              secureTextEntry
            />
          </View>
          <View className="w-60 items-center justify-center mt-10">
            <TouchableOpacity
              onPress={handleSubmit}
              className="bg-blue-500 items-center w-full py-4 rounded-lg"
            >
              <Text className="text-white font-semibold text-base">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              className="bg-white items-center w-full mt-1 py-4 rounded-lg border-blue-500 border-2"
            >
              <Text className="text-blue-500 font-semibold text-base">
                Not yet registered?
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default LoginScreen;
