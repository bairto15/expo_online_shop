import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Product from "../screens/product";
import menuProduct from "../screens/menuProduct";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Товар"
      screenOptions={{
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen name="Товар" component={Product} />
      <Drawer.Screen name="Описание" component={menuProduct} />
    </Drawer.Navigator>
  );
}
