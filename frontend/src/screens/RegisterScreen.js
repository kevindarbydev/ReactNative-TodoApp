import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";

const RegisterScreen = () => {
  const navigation = useNavigation(); 
const url = "http://<yourIPhere>:3001/user/save";
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        console.log("(Register) email: " +values.email);
console.log("(Register) pw: " + values.password);
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
                alert(
                  "Successfully Registered! - Redirecting you to the login page"
                );
                navigation.navigate("Login");
              } catch (error) {
                console.log(error);
              }
            } else {
              alert(
                `Invalid registration - email ${values.email} already exists`
              );
            }
          })
          .catch((error) => console.log(error));
      }}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <KeyboardAvoidingView className="flex-1 items-center justify-center">
          <View className="w-50">
            <TextInput
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              className="bg-white px-10 py-5 rounded-lg mt-5"
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
              className="bg-white items-center w-full mt-1 py-4 rounded-lg border-blue-500 border-2"
            >
              <Text className="text-blue-500 font-semibold text-base">Register</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default RegisterScreen;