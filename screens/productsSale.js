import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function Products() {
  return (
    <FlatList
      numColumns={2}
      keyExtractor={(item) => item.id}
      data={listProductSale}
      style={styles.flat}
      renderItem={({ item }) => (
        <View key={item.id} style={styles.itemProduct}>
          <Image style={styles.img} source={item.img} />
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.decription}>{item.decription}</Text>
          <Text style={styles.timer}>{item.timer}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  flat: {
    marginLeft: windowWidth * 0.02,
    marginBottom: windowWidth * 0.01,
    paddingTop: windowWidth * 0.01,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemProduct: {
    borderWidth: 1,
    borderColor: "#cfcfcf",
    marginTop: windowWidth * 0.01,
    marginLeft: windowWidth * 0.01,
    marginRight: windowWidth * 0.01,
    height: windowWidth * 0.59,
    width: windowWidth * 0.46,
    boxShadow: "0 0 4px rgba(0,0,0,0.3)",
  },
  img: {
    width: "100%",
    height: windowWidth * 0.42,
  },
  price: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.04,
    marginLeft: windowWidth * 0.015,
  },
  decription: {
    fontSize: windowWidth * 0.03,
    marginLeft: windowWidth * 0.015,
    marginTop: windowWidth * 0.01,
    color: "gray",
  },
  timer: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.035,
    marginLeft: windowWidth * 0.015,
    color: "red",
  },
});

const listProductSale = [
  {
    id: 1,
    img: require("../images/sharf1.jpg"),
    price: "1300 p",
    decription: "Шарф а278",
    timer: "17:12:56",
  },
  {
    id: 2,
    img: require("../images/уходовый.jpg"),
    price: "1300 p",
    decription: "Шарф а278",
    timer: "17:12:56",
  },
  {
    id: 3,
    img: require("../images/электрочайник.jpg"),
    price: "1300 p",
    decription: "Шарф а278",
    timer: "17:12:56",
  },
  {
    id: 4,
    img: require("../images/рюкзак.jpg"),
    price: "1300 p",
    decription: "Шарф а278",
    timer: "17:12:56",
  },
  {
    id: 5,
    img: require("../images/робот.jpg"),
    price: "1300 p",
    decription: "Шарф а278",
    timer: "17:12:56",
  },
  {
    id: 6,
    img: require("../images/мпмпрмпмпмп.jpg"),
    price: "1300 p",
    decription: "Шарф а278",
    timer: "17:12:56",
  },
  {
    id: 7,
    img: require("../images/шторы21.jpg"),
    price: "1300 p",
    decription: "Шарф а278",
    timer: "17:12:56",
  },
];
