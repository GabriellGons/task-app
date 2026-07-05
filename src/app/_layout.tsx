import { Stack } from "expo-router";
import { HeaderTitle } from "expo-router/build/react-navigation";

export default function RootLayout() {
  return <Stack screenOptions={{headerShown: false}}/>;
}
