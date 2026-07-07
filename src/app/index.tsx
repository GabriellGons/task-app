import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import TaskGrid from "@/components/TaskGrid";
import TaskSection from "@/components/TaskSection";
import FloatingButton from "@/components/FloatingButton";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <TaskGrid />
          <TaskSection />
        </ScrollView>
        <FloatingButton />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}