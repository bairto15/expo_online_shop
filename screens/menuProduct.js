import { StyleSheet, Text, View } from "react-native";

export default function menuProduct() {
  return (
    <View style={styles.container}>
      <Text>Меню товара</Text>
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