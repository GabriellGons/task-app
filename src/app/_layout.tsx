import { client } from "@/graphql/client";
import { ApolloProvider } from "@apollo/client/react";
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { Button } from "react-native";
import { AuthProvider, useAuth } from "../../context/AuthContext";

function RootLayoutNav() {
  const { authState, onLogout } = useAuth();

  useEffect(() => {
    if (authState?.authenticated === false) {
      router.replace("/SignIn");
    } else {
      router.replace("/");
    }
  }, [authState?.authenticated]);

  return (
    <Stack>
      <Stack.Screen
        options={{
          headerTitle: "Task App",
          headerRight: () => <Button onPress={onLogout} title="Sign Out" />,
        }}
        name="index"
      />
      <Stack.Screen options={{ headerShown: false }} name="SignIn" />
      <Stack.Screen options={{ headerShown: false }} name="SignUp" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
    </ApolloProvider>
  );
}
