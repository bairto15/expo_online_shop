import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import NavigateChats from "./navigateChat";
import NavigateSale from "./navigateSale";
import NavigateAllProducts from "./navigateAllProducts";
import NavigateProfile from "./navigateProfile";

const Tab = createBottomTabNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === "NavigateSale") {
              return <Foundation name="burst-sale" size={size} color={color} />;
            } else if (route.name === "NavigateAllProducts") {
              return <Fontisto name="list-2" size={size} color={color} />;
            } else if (route.name === "NavigateChats") {
              return (
                <Ionicons name="chatbubble-outline" size={size} color={color} />
              );
            } else if (route.name === "NavigateProfile") {
              return <SimpleLineIcons name="user" size={size} color={color} />;
            }
          },
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "tomato",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="NavigateSale"
          component={NavigateSale}
          options={{ title: "Совместное" }}
        />
        <Tab.Screen
          name="NavigateAllProducts"
          component={NavigateAllProducts}
          options={{ title: "Маркет" }}
        />
        <Tab.Screen
          name="NavigateChats"
          component={NavigateChats}
          options={{ title: "Чат" }}
        />
        <Tab.Screen
          name="NavigateProfile"
          component={NavigateProfile}
          options={{ title: "Профиль" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
