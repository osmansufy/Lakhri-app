import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
  Button,
  TouchableOpacity,
} from "react-native";

const SignUp = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [passWord, setPassWord] = useState();
  const [email, setEmail] = useState();

  return (
    <SafeAreaView style={styles.body}>
      <View style={{ padding: 10 }}>
        <Text style={styles.heading}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassWord(text)}
          value={passWord}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
      </View>
      <TouchableHighlight style={styles.submit} underlayColor="#fff">
        <Text style={styles.submitText}>Submit</Text>
      </TouchableHighlight>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.navigationContainer}>
          <Text>Not a Member?</Text>
          <TouchableOpacity onPress={() => navigation.push("SignUp")}>
            <Text style={{ marginLeft: 5, color: "blue" }}>Join Now</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 10, marginBottom: 10 }}>Or</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Skip for Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  heading: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "700",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ADADAD",
    padding: 10,
    marginBottom: 7,
    marginTop: 7,
  },
  submit: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#098342",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fff",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
  },
});
export default SignUp;
