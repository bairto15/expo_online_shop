import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from "../screens/products";
import navigateProduct from "./navigateProduct";
//import Login from "../screens/login";

const Stack = createNativeStackNavigator();

export default function NavigateSale() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={Products}
        options={{
          title: "Список",
        }}
      />
      <Stack.Screen
        name="navigateProduct"
        component={navigateProduct}
        options={{ title: "Товар" }}
      />
    </Stack.Navigator>
  );
}