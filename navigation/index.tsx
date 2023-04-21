import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ColorSchemeName } from "react-native";

import ViewImageScreen from "../screens/ViewImageScreen";
import { RootStackParamList } from "../types";
import { BottomTabNavigator } from "./BottomTabNavigator";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="ViewImage" component={ViewImageScreen} />
    </Stack.Navigator>
  );
}
