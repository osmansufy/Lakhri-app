import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
} from "react-native";
import { Feather, Octicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.body}>
      {/* search box */}
      <View style={styles.search}>
        <View style={styles.menuIconContainer}>
          <Feather name="menu" size={24} color="black" />
        </View>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search" />
        </View>
      </View>
      {/* search box end */}

      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcome}>Welcome to Lakhri food</Text>
          <Text style={styles.welcomeName}>Rakib Hossain</Text>
        </View>
        <View style={styles.filterIConContainer}>
          <Octicons name="settings" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    height: 90,
  },
  menuIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  searchContainer: {
    backgroundColor: "#EEEEEF",
    flex: 1,
    borderRadius: 6,
    height: 35,
    justifyContent: "center",
    paddingLeft: 10,
  },
  welcomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcome: {
    color: "#202731",
    fontSize: 16,
  },
  welcomeName: {
    color: "#202731",
    fontSize: 20,
    marginVertical: 10,
  },
  filterIConContainer: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
});
