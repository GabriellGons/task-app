import { Checkbox, Host } from "@expo/ui";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

type TaskListProps = {
  name: string;
  description: string;
  start: string;
  end: string;
};

export default function TaskList() {
  const [accepted, setAccepted] = useState(false);
  const data = [
    {
      id: "1",
      name: "task 1",
      description: "description 1",
      start: "07-06-2025",
      end: "07-07-2025",
    },
    {
      id: "2",
      name: "task 2",
      description: "description 2",
      start: "07-06-2025",
      end: "07-07-2025",
    },
    {
      id: "3",
      name: "task 3",
      description: "description 3",
      start: "07-06-2025",
      end: "07-07-2025",
    },
    {
      id: "4",
      name: "task 4",
      description: "description 4",
      start: "07-06-2025",
      end: "07-07-2025",
    },
    {
      id: "5",
      name: "task 5",
      description: "description 5",
      start: "07-06-2025",
      end: "07-07-2025",
    },
    {
      id: "6",
      name: "task 6",
      description: "description 6",
      start: "07-06-2025",
      end: "07-07-2025",
    },
    {
      id: "7",
      name: "task 7",
      description: "description 7",
      start: "07-06-2025",
      end: "07-07-2025",
    },
    {
      id: "8",
      name: "task 8",
      description: "description 8",
      start: "07-06-2025",
      end: "07-07-2025",
    },
    {
      id: "9",
      name: "task 9",
      description: "description 9",
      start: "07-06-2025",
      end: "07-07-2025",
    },
    {
      id: "10",
      name: "task 10",
      description: "description 10",
      start: "07-06-2025",
      end: "07-07-2025",
    },
  ];

  return (
    <View>
      {data.map((item) => (
        <View
          key={item.id}
          style={[
            styles.container,
            { flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Host style={{ marginLeft: 8 }}>
            <Checkbox value={accepted} onValueChange={setAccepted} />
          </Host>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              marginLeft: 28
            }}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <Text>{item.end}</Text>
        </View>
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
