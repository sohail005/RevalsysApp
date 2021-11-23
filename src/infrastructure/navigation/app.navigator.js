import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ProductsContextProvider } from "../../services/restaurants/products.context";
import { FeedbackNavigator } from "./settings.navigator";
import { ProductsNavigator } from "./Products.navigator";
import { HomeScreen } from "../../features/home/HomeScreen";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Products: "list",
  Home: "home",
  Feedback: "rocket",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  
    
      <ProductsContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          screenOptions={{
            activeTintColor: "green",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Products" component={ProductsNavigator} />
          <Tab.Screen name="Feedback" component={FeedbackNavigator} />

        </Tab.Navigator>
      </ProductsContextProvider>
    

);
