import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

import { useRef } from "react";
import firebase from "../firebaseConfig";
const Signup = ({ navigation }) => {
  const recaptchaVerifier = React.useRef(null);
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [passWord, setPassWord] = useState();
  const [confirmPassWord, setConfirmPassWord] = useState();
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;
  const onSendVerificationCode = () => {
    console.log(phoneNumber, recaptchaVerifier);
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(`+88${phoneNumber}`, recaptchaVerifier.current)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={styles.body}>
      <View style={{ padding: 10 }}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
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
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassWord(text)}
          value={confirmPassWord}
          keyboardType="email-address"
        />
      </View>
      <TouchableHighlight
        onPress={onSendVerificationCode}
        style={styles.submit}
        underlayColor="#fff"
      >
        <Text style={styles.submitText}>Join Now</Text>
      </TouchableHighlight>
      <View style={styles.navigationContainer}>
        <Text>Already a member?</Text>
        <TouchableOpacity onPress={() => navigation.push("SignIn")}>
          <Text style={{ marginLeft: 5, color: "blue" }}>Sign In</Text>
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

  submitText: {
    color: "#fff",
    textAlign: "center",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
export default Signup;
