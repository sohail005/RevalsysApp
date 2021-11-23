import React from "react";
import {
  FeedbackScreen,
} from "../../features/settings/screens/settings.screen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";


const SettingsStack = createStackNavigator();

export const FeedbackNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Feedback"
        component={FeedbackScreen}
      />
    </SettingsStack.Navigator>
  );
};
