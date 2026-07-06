import { View, StyleSheet, Text } from "react-native";

type TaskCardProps = {
  label: string;
  value: string;
  color: string;
};

export default function TaskCard({ label, value, color }: TaskCardProps) {
  return (
    <View style={[styles.card, { borderLeftColor: color, boxShadow: `0px 0px 5px ${color}` }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    width: "47%",
    borderLeftWidth: 4,
  },
  label: {
    fontSize: 14,
    color: "black",
  },
  value: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    marginTop: 4,
  },
  
});
