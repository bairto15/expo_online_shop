import { StyleSheet, Text, View, Button } from "react-native";

export default function Products({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Открыть корзину</Text>
      <Button
        title="Открыть корзину"
        onPress={() => {
          navigation.navigate("Card");
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