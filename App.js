import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigate from "./navigation/navigate";

export default function App() {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
}
