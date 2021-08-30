import {StatusBar as ExpoStatusBar}  from 'expo-status-bar';
import React from 'react';
import {StatusBar} from 'react-native';
import {RestaurantsScreen} from "./src/features/restaurants/screen/restaurants.screen";

console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <>
  <RestaurantsScreen />
<ExpoStatusBar style="auto"/>
    </>

  );
}


