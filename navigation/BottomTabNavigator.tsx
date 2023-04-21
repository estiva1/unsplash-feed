import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import FeedScreen from "../screens/FeedScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import {
  BottomTabParamList,
  FeedParamList,
  FavoritesParamList,
} from "../types";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <Tab.Navigator
      initialRouteName="Feed"
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} />
          ),
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
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}


const FeedStack = createStackNavigator<FeedParamList>();

function FeedNavigator() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{ headerTitle: "Unsplash Feed" }}
      />
    </FeedStack.Navigator>
  );
}

const FavoritesStack = createStackNavigator<FavoritesParamList>();

function FavoritesNavigator() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{ headerTitle: "Favorites" }}
      />
    </FavoritesStack.Navigator>
  );
}
