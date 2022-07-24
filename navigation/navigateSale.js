import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShopingCard from "../components/shopingCard";
import ProductsSale from "../screens/productsSale";

const SaleStack = createNativeStackNavigator();

export default function NavigateSale() {
  return (
    <SaleStack.Navigator>
      <SaleStack.Screen
        name="ProductsSale"
        component={ProductsSale}
        options={{
          title: "Горячее предложение",
          headerRight: () => <ShopingCard />,
        }}
      />
    </SaleStack.Navigator>
  );
}