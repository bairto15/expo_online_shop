import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/headers";
import Products from "../screens/products";
import navigateProduct from "./navigateProduct";

const Stack = createNativeStackNavigator();

export default function NavigateSale() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={Products}
        options={{
          title: "Список",
          headerTitle: (props) => <Header {...props} />,
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