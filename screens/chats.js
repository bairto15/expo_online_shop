import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Products({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Открыть чат</Text>
      <Button
        title="Открыть чат"
        onPress={() => {
          navigation.navigate("Chat");
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
