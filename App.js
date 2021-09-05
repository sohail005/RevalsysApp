import {StatusBar as ExpoStatusBar}  from 'expo-status-bar';
import React from 'react';
import {StatusBar} from 'react-native';
import {RestaurantsScreen} from "./src/features/restaurants/screen/restaurants.screen";
import {ThemeProvider} from "styled-components/native";
import {theme} from "./src/infrastructure/theme";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);
console.log(StatusBar.currentHeight);
export default function App() {
 const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded  || !latoLoaded){
return null;
  }
  return (
    <>
    <ThemeProvider theme={theme}>
    <NavigationContainer>
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Restaurants") {
                iconName = "md-checkmark-circle";
              } else if (route.name === "Settings") {
                iconName = "md-settings";
              } else if (route.name === "Map") {
                iconName = "md-map";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "red",
            inactiveTintColor: "gray",
          }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
  </ThemeProvider>
<ExpoStatusBar style="auto"/>
    </>

  );
}


