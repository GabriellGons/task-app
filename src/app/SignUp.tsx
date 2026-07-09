import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log(email, password);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <TextInput
            placeholder="name@gmail.com"
            style={styles.textInput}
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          ></TextInput>
          <TextInput
            placeholder="password"
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          ></TextInput>
          <TouchableOpacity onPress={handleSignUp}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "80%",
    marginBottom: 20,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
});
