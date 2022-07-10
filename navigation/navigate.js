import React from "react";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Navigate_order") {
                return (
                  <Ionicons
                    name={
                      focused
                        ? "ios-information-circle"
                        : "ios-information-circle-outline"
                    }
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Navigate_list") {
                return (
                  <Ionicons
                    name={focused ? "ios-list" : "ios-list"}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Navigate_chat") {
                return <EvilIcons name={"comment"} size={size} color={color} />;
              } else if (route.name === "Navigate_setting") {
                return <EvilIcons name={"gear"} size={size} color={color} />;
              }
            },
            tabBarInactiveTintColor: "gray",
            tabBarActiveTintColor: "tomato",
          })}
        >
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
