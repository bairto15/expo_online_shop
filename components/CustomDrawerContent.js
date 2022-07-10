import {
    View,
    Text,
    StyleSheet,
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
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 15,
    },
  });