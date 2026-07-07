import { useRouter } from 'expo-router';
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function FloatingButton() {
  const router = useRouter();

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.contentContainer}
        onPress={() => router.push("/Task")}
      >
        <View style={style.iconContainer}>
          <Image
            source={require("../../assets/images/android-icon-foreground.png")}
            style={style.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "#0F56B3",
    position: "absolute",
    bottom: 30,
    right: 30,
    borderRadius: 50,
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 26,
    height: 26,
  },
});
