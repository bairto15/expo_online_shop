import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Dimensions,
    SafeAreaView,
  } from "react-native";
  
  export default function Header() {
    return (
      <View>
        <SafeAreaView style={styles.container}>
          <Text style={{ fontSize: 20 }}>Кастомный заголовок</Text>
        </SafeAreaView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: Dimensions.get("window").width * 0.92,
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 15,
    },
  });