import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ShopingCard() {
  const number = 2;
  return (
    <View style={styles.container}>
      <Feather name="shopping-cart" size={24} color="gray" />
      <View style={styles.badge}>
        <Text
          style={{
            color: "white",
            fontSize: 11,
          }}
        >
          {number}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 17,
    width: 17,
    backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    color: "white",
    fontSize: 11,
  },
});
