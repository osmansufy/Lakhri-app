import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const LakhriItem = ({ url }) => {
  return (
    <View style={styles.FoodContainer}>
      <Image
        style={styles.FoodImage}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

export default LakhriItem;

const styles = StyleSheet.create({
  FoodContainer: {
    marginRight: 15,
  },
  FoodImage: {
    height: 150,
    width: 100,
    borderRadius: 4,
  },
});
