import { StyleSheet, Text, View, Button } from "react-native";

export default function Products({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Список товаров</Text>
      <Button
        title="Открыть товар"
        onPress={() => {
          navigation.navigate("Product");
        }}
      />
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