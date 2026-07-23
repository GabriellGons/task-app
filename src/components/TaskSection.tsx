import { StyleSheet, Text, View } from "react-native";
import TaskList from "./TaskList";
import { Task } from "@/types/task";


export default function TaskSection({ tasks }: { tasks: Task[] }) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>All My Tasks</Text>
      <TaskList tasks={tasks} />
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
