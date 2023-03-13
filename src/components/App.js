import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  const store = configureStore({
    reducer: {
    },
  })
  return (
    <NavigationContainer>
      <Provider store={store}>
            <TailwindProvider>
            </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
