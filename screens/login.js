import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { StyleSheet, Text, View, Button } from "react-native";
import { login_in } from "../redux/actions";

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Авторизация</Text>
      <Button
        title="Войти"
        onPress={() => {
          dispatch(login_in("in"));
        }}
      >
        Войти
      </Button>
      <Button
        title="Регистрация"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        Зарегистрироваться
      </Button>
      <StatusBar style="auto" />
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