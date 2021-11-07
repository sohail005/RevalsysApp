import React from "react";
import { RestaurantDetailScreen } from "../../features/restaurants/screen/restaurant-detail.screen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import {
  ProductScreen,
  RestaurantsScreen,
} from "../../features/restaurants/screen/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen name="Restaurants" component={ProductScreen} />
    </RestaurantStack.Navigator>
  );
};
