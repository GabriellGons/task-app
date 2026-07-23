import { Checkbox, Host } from "@expo/ui";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Task } from "@/types/task";
import { router } from "expo-router";
import { formatEpochToString } from "@/utils/date";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const [accepted, setAccepted] = useState(false);

  return (
    <View>
      {tasks.map((item) => item && (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.container,
            { flexDirection: "row", alignItems: "center" },
          ]}
          onPress={() => {
            router.push({
              pathname: "/NewTask",
              params: {
                id: item.id,
                title: item.title,
                description: item.description,
                startedAt: formatEpochToString(item.startedAt, true),
                endAt: formatEpochToString(item.endAt, true),
              },
            })
          }}
        >
          <Host style={{ marginLeft: 8 }}>
            <Checkbox value={accepted} onValueChange={setAccepted} />
          </Host>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              marginLeft: 28,
            }}
          >
            <Text style={styles.name}>{item.title}</Text>
            <Text>{formatEpochToString(item.endAt, true)}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  description: {
    fontSize: 13,
    color: "black",
    marginTop: 4,
  },
});
