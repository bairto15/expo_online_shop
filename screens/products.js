import { StyleSheet, Text, Dimensions, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

const w = Dimensions.get("window").width;

export default function Products({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {listCategoty.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.itemText}>{item}</Text>
          <View style={styles.arrow}>
            <AntDesign name="right" size={20} color="gray" />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: w * 0.02,
  },
  item: {
    width: "100%",
    height: w * 0.09,
    borderBottomWidth: 1,
    borderBottomColor: "#cfcfcf",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: w * 0.03,
    paddingEnd: w * 0.02,
  },
  itemText: {
    fontSize: w * 0.05,
  },
  arrow: {},
});

const listCategoty = [
  "Компьютеры",
  "Телефоны",
  "Мониторы",
  "Телевизорвы",
  "Футболки",
  "Куртки",
  "Майки",
  "Кросовки",
  "Брюки",
  "Ботинки",
];
