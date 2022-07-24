import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";

export default function Product() {
  return (
    <View style={styles.container}>
      <Text>Корзина</Text>
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