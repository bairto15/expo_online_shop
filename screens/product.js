import { StyleSheet, Text, View, Button } from "react-native";

export default function Product({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Имя товара</Text>
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