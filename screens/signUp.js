import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text>Регистрация</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
});