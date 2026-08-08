import { Checkbox, Host } from "@expo/ui";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Task } from "@/types/task";
import { router } from "expo-router";
import { formatEpochToString } from "@/utils/date";
import { GET_TASK, TOGGLE_TASK_COMPLETION } from "@/graphql/queries";
import { useMutation } from "@apollo/client/react";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const [accepted, setAccepted] = useState(false);
  const [toggleTask, { loading: loadingCreate }] = useMutation(
    TOGGLE_TASK_COMPLETION,
    {
      refetchQueries: [{ query: GET_TASK }],
    },
  );

  return (
    <View>
      {tasks.map(
        (item) =>
          item && (
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
                    startedAt: item.startedAt,
                    endAt: item.endAt,
                  },
                });
              }}
            >
              <Pressable
                style={{ padding: 6 }}
                onPress={async () => {
                  try {
                    console.log('udah mencet');
                    await toggleTask({
                      variables: {
                        id: item.id,
                      },
                    });
                  } catch (error) {
                    console.error("Gagal merubah status tugas:", error);
                  }
                }}
              >
                <Host style={{ marginLeft: 8 }}>
                  <Checkbox
                    value={item.isDone ?? false}
                    onValueChange={() => {}}
                  />
                </Host>
              </Pressable>
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
          ),
      )}
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
