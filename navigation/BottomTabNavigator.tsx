import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FeedScreen from "../screens/FeedScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import {
  BottomTabParamList,
  FeedParamList,
  FavoritesParamList,
} from "../types";
import { useLayoutEffect } from "react";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="heart-circle-sharp" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabBarIcon = (props: { name: string; color: string }) => {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
};

const FeedStack = createStackNavigator<FeedParamList>();

const FeedNavigator = () => {
  return (
    <FeedStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#ccbfaa" },
      }}
    >
      <FeedStack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{ headerTitle: "Unsplash Feed" }}
      />
    </FeedStack.Navigator>
  );
};

const FavoritesStack = createStackNavigator<FavoritesParamList>();

const FavoritesNavigator = () => {
  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#ccbfaa" },
      }}
    >
      <FavoritesStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{ headerTitle: "Favorites" }}
      />
    </FavoritesStack.Navigator>
  );
};
