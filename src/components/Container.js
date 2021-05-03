import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";

export default ({ onPress, style, children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={style}>{children}</View>
  </TouchableWithoutFeedback>
);
