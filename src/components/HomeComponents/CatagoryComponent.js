import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CatagoryComponent = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CatagoryComponent;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginRight: 10,
    backgroundColor: "#CBF4DC",
    height: 40,
    borderRadius: 4,
  },
  title: {
    color: "#098342",
  },
});
