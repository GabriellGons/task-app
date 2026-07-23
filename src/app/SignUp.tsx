import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../context/AuthContext";
import { router } from "expo-router";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onSignUp } = useAuth();

  const signUp = async () => {
    const passwordRegex = /^[a-zA-Z0-9]{6,}$/;
    
    if (!passwordRegex.test(password)) {
      alert("Password harus minimal 6 karakter dan hanya boleh berisi huruf atau angka!");
      return;
    }
    const result = await onSignUp!(name, email, password);

    console.log("DEBUG SIGNUP RESULT:", JSON.stringify(result));
    if (result?.error) {
      alert(result.msg);
      router.replace("/SignIn");
    } else {
      alert(result.msg);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <TextInput
            placeholder="namem"
            style={styles.textInput}
            onChangeText={setName}
            value={name}
          ></TextInput>
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
          <TouchableOpacity onPress={signUp}>
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
