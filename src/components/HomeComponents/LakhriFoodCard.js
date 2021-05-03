import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const LakhriFoodCard = ({ url }) => {
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

export default LakhriFoodCard;

const styles = StyleSheet.create({
  FoodContainer: {
    marginRight: 15,
  },
  FoodImage: {
    height: 90,
    width: 250,
    borderRadius: 4,
  },
});
