import FloatingButton from "@/components/FloatingButton";
import TaskGrid from "@/components/TaskGrid";
import TaskSection from "@/components/TaskSection";
import { useQuery } from "@apollo/client/react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GET_TASK } from "../graphql/queries";

export default function Index() {
  const { loading, error, data } = useQuery(GET_TASK);

  // useEffect(() => {
  //   if (data) {
  //     console.log("ini datanya:",data.getTasks.task);
  //   } else if (error) {
  //     console.log("ini errornya:", error);
  //   }
  // }, [data, error]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Memuat data tugas...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Terjadi kesalahan: {error.message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <ScrollView>
        <TaskSection tasks={data?.getTasks?.task || []} />
      </ScrollView>
      <FloatingButton />
    </SafeAreaProvider>
  );
}
