import { Checkbox, Host } from '@expo/ui';
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";

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
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Host>
          <Checkbox value={accepted} onValueChange={setAccepted} />
          </Host>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.end}</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    ></FlatList>
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
