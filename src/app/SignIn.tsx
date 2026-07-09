import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../context/AuthContext";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onSignIn, onSignUp } = useAuth();

  const signIn = async () => {
    const result = await onSignIn!(email, password);
    if (result?.error) {
      console.log(email, password);
      alert(result.msg);
    } else {
      alert("Login successfully");
    }
  };

  const signUp = async () => {
    const result = await onSignUp!(email, password);
    if (result?.error) {
      alert(result.msg);
    } else {
      alert("slebew");
    }
  };

  const [authData, setAuthData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    },
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{justifyContent: "center", alignItems: "center"}}>
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
          <TouchableOpacity onPress={signIn}>
            <Text>Sign In</Text>
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
