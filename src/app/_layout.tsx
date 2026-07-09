import { router, Stack } from "expo-router";
import { Button } from "react-native";
import { AuthProvider, useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

function RootLayoutNav() {
  const { authState, onLogout } = useAuth();

  useEffect(() => {
    console.log(authState?.authenticated);

    if (authState?.authenticated === false){
      router.replace("/SignIn")
    } else {
      router.replace("/")
    }

  }, [])

  return (
    <Stack>
      {authState?.authenticated ? (
        <Stack.Screen
          options={{
            headerRight: () => <Button onPress={onLogout} title="Sign Out" />,
          }}
          name="index"
        />
      ) : (
        <Stack.Screen options={{ headerShown: false }} name="SignIn" />
      )}
    </Stack>
  );
}

export default function RootLayout() {

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
