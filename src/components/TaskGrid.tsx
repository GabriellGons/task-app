import { View, StyleSheet } from "react-native";
import TaskCard from "./TaskCard";

export default function TaskGrid() {
    return(
        <View style={styles.grid}>
            <TaskCard label="Very Hard" value="1" color="#e02522ff" />
            <TaskCard label="Hard" value="2" color="#f09b33ff" />
            <TaskCard label="Medium" value="3" color="#f2e307ff" />
            <TaskCard label="Easy" value="4" color="#42de42ff" />
        </View>
    );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    padding: 12,
    justifyContent: 'center'
  },
});