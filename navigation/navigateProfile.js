import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShopingCard from "../components/shopingCard";
import Profile from "../screens/profile";
import Card from "../screens/card";

const ProfileStack = createNativeStackNavigator();

export default function NavigateAllProducts() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Профиль",
          headerRight: () => <ShopingCard />,
        }}
      />
      <ProfileStack.Screen
        name="Card"
        component={Card}
        options={{ title: "Корзина" }}
      />
    </ProfileStack.Navigator>
  );
}