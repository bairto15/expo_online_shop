import { createDrawerNavigator } from "@react-navigation/drawer";

//import Product from "../screens/product";
//import menuProduct from "../screens/menuProduct";
import Login from "../screens/login";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Login}
      />
      <Drawer.Screen
        name="Notifications"
        component={Login}
      />
    </Drawer.Navigator>
  );
}
