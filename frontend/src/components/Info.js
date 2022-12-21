import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";

//!-------------------------------------------------------------------
//! currently working on this, pushed just to help revert the many changes quicker - Chris

export default function Info(props) {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const { height } = Dimensions.get("window");

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

  const saveModal = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -height],
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

  const save = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const open = {
    transform: [{ scale: openModal }, { translateY: saveModal }],
  };

  const background = {
    backgroundColor: color,
  };

  return (
    <View style={[styles.container, styles.center]}>
      <View style={[styles.shadowButton, styles.center]}>
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
          <View style={[styles.wrap]}>
            <Text style={[styles.text, styles.helloText]}>
              Welcome to our cool app.
            </Text>
            <Text style={[styles.text, styles.moreText]}>
              Keep yourself motivated by leveling up with experience points! Add
              your tasks and click on them once you've completed them and you'll
              gain XP!
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={[styles.modalButton, styles.center]}
                onPress={close}
              >
                <Text style={[styles.text]}>GOT IT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.center]}
                onPress={save}
              >
                <Text style={[styles.text]}>About Us</Text>
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

  modalButton: {
    backgroundColor: "red",
    borderRadius: 100,
    borderColor: "black",
    marginTop: 64,
    borderWidth: 2,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 25,
    paddingRight: 25,
    marginHorizontal: 5,
    flex: 1,
  },

  moreText: {
    textAlign: "center",
    marginTop: 64,
  },

  helloText: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },

  //   wrap: {
  //     padding: 20,
  //     margin: 20,
  //     borderRadius: 8,
  //     backgroundColor: "#ffffff",
  //     // shadowColor: "#4048BF",
  //     // shadowOffset: {
  //     //   width: 8.4,
  //     //   height: 8.4,
  //     // },
  //     // shadowOpacity: 0.74,
  //     // shadowRadius: 30,
  //     elevation: 10,
  //   },

  // how it works button
  text: {
    fontSize: 30,
    color: "#ffffff",
    fontWeight: "600",
    // fontFamily: "Monospace",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  //   shadowButton: {
  //     borderColor: "blue",
  //     borderWidth: 1,
  //     borderRadius: 105,
  //     width: 210,
  //     height: 80,
  //     shadowColor: "#4048BF",
  //     shadowOffset: {
  //       width: 8.4,
  //       height: 8.4,
  //     },
  //     shadowOpacity: 0.5,
  //     shadowRadius: 30,
  //     elevation: 10,
  //   },
  mainButton: {
    zIndex: 10,
    width: 200,
    height: 72,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
    // shadowColor: "#4048BF",
    // shadowOffset: {
    //   width: 6.4,
    //   height: 6.4,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 20,
    backgroundColor: "orange",
  },
  container: {
    // flex: 1,
    backgroundColor: "white",
  },
});
