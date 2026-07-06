import { Text, View, StyleSheet } from "react-native";
import TaskList from "./TaskList";

export default function TaskSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>All My Tasks</Text>
      <TaskList />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    marginTop: 4,
    marginBottom: 10,
  },
});
