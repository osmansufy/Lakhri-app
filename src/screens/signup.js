import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

const SignUp = () => {
  const [text, setText] = useState("");
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{
          height: 40,
          border: "1px solid #E8E8E8",
          borderRadius: 8,
          padding: 10,
        }}
        placeholder="Type here to translate!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
    </View>
  );
};

export default SignUp;
