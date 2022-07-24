import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShopingCard from "../components/shopingCard";
import Products from "../screens/products";
import Product from "../screens/product";

const AllStack = createNativeStackNavigator();

export default function NavigateAllProducts() {
  return (
    <AllStack.Navigator>
      <AllStack.Screen
        name="Products"
        component={Products}
        options={{
          title: "Выберите категорию",
          headerRight: () => <ShopingCard />,
        }}
      />
      <AllStack.Screen
        name="Product"
        component={Product}
        options={{ title: "Товар" }}
      />
    </AllStack.Navigator>
  );
}