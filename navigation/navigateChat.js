import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShopingCard from "../components/shopingCard";
import Chats from "../screens/chats";
import Chat from "../screens/chat";

const MessageStack = createNativeStackNavigator();

export default function NavigateAllProducts() {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen
        name="Chats"
        component={Chats}
        options={{
          title: "Сообщения",
          headerRight: () => <ShopingCard />,
        }}
      />
      <MessageStack.Screen name="Chat" component={Chat} options={{ title: "Чат" }} />
    </MessageStack.Navigator>
  );
}

