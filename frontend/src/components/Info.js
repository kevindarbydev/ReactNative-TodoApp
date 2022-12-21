import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
} from "react-native";

//!-------------------------------------------------------------------
//! currently working on this, pushed (pushing) just to help revert the many changes quicker - Chris

export default function Info() {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const color = animation.interpolate({
    inputRange: [0, 0.2, 1.8, 2],
    outputRange: [
      "rgba(255, 255, 255, 0.0)",
      "rgba(45, 57, 82, 0.5)",
      "rgba(45, 57, 82, 0.5)",
      "rgba(255, 255, 255, 0.0)",
    ],
  });

  const openModal = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const modalTrigger = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const close = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const open = {
    transform: [{ scale: openModal }],
  };

  const background = {
    backgroundColor: color,
  };

  return (
    <View style={[styles.container, styles.center]}>
      {/* how it works button */}
      <View style={[styles.center]}>
        <TouchableOpacity
          style={[styles.mainButton, styles.center]}
          onPress={modalTrigger}
        >
          <Text style={[styles.text]}>HOW IT WORKS</Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[styles.background, background]}
        pointerEvents="box-none"
      >
        <Animated.View style={[styles.background, open]}>
          <View>
            {/* <Text style={[styles.text]}>Welcome to our cool app.</Text> */}
            <Text style={[styles.text, styles.moreText]}>
              Keep yourself motivated by leveling up with experience points! Add
              your tasks and tap them once you're done and you'll gain XP! 🕹😁🕹
            </Text>
            <View>
              <TouchableOpacity
                style={[styles.modalButton, styles.center]}
                onPress={close}
              >
                <Text style={[styles.text]}>GOT IT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  modalText: {
    textAlign: "center",
    fontSize: 24,
  },

  // "GOT IT" button
  modalButton: {
    // kind of fuschia
    backgroundColor: "#ff6ff7",
    borderRadius: 100,
    borderColor: "black",
    marginTop: 90,
    borderWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    // marginHorizontal: 2,
    // flex: 1,
    maxWidth: "50%",
    marginStart: "25%",
  },

  moreText: {
    textAlign: "center",
    marginTop: 1050,
  },

  // how it works button, text body
  text: {
    fontSize: 23,
    color: "black",
    fontWeight: "500",
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  shadowButton: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 105,
    width: 210,
    height: 80,
    shadowColor: "#4048BF",
    shadowOffset: {
      width: 8.4,
      height: 8.4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
  },
  mainButton: {
    zIndex: 10,
    width: 200,
    height: 72,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "orange",
  },
  container: {
    backgroundColor: "rgb(229, 231, 235)",
  },
});
