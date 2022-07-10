import React from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "../screens/login";
import SignUp from "../screens/signUp";
import NavigateSale from "./navigateSale";
import NavigateAllProducts from "./navigateAllProducts";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigate() {
  const state = useSelector((state) => state);
  const login = state.filter((item) => {
    return item.login;
  })[0].login;
  return (
    <NavigationContainer>
      {login == "out" ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: "Регистрация" }}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="NavigateSale"
            component={NavigateSale}
            options={{
              title: "Sale",
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="NavigateAllProducts"
            component={NavigateAllProducts}
            options={{
              title: "Все товары",
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
