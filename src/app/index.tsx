import FloatingButton from "@/components/FloatingButton";
import TaskGrid from "@/components/TaskGrid";
import TaskSection from "@/components/TaskSection";
import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
