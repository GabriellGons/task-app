import * as Device from 'expo-device';
import { Text, View, StyleSheet, Platform } from "react-native";
import { globalStyles } from '@/styles/global';

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Task App</Text>
      <Text>Running on: {Platform.OS}</Text>
      <Text>Device model: {Device.modelName}</Text>
      <Text>Device brand: {Device.brand}</Text>
      <Text>OS version: {Device.osVersion}</Text>
    </View>
  );
}
