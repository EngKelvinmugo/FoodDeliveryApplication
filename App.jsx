import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SafeAreaViewBase,
} from "react-native";
import HomeScreen from "./src/homeScreen";
import CardScreen from "./src/components/CardScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./src/app/store";
import BasketScreen from "./src/components/BasketScreen";
import PreparingOrderScreen from "./src/components/PreparingOrderScreen";
import DeliveryScreen from "./src/components/DeliveryScreen";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Restaurant"
            component={CardScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Order"
            component={PreparingOrderScreen}
            options={{ headerShown: false , presentation:"fullScreenModal" }}
          />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ headerShown: false , presentation:"modal" }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{ headerShown: false , presentation:"modal" }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
