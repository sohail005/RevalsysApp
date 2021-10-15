import { Navigation } from "./src/infrastructure/navigation/index";
import {StatusBar as ExpoStatusBar}  from 'expo-status-bar';
import React, { useState, useEffect,useContext } from "react";
import {ThemeProvider} from "styled-components/native";
import * as firebase from "firebase";
import {theme} from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";


const firebaseConfig = {
  apiKey: "AIzaSyBg6K-xUp5rVDsuZre4clBV-3zO0wQGqzk",
  authDomain: "restaurant-69bb4.firebaseapp.com",
  projectId: "restaurant-69bb4",
  storageBucket: "restaurant-69bb4.appspot.com",
  messagingSenderId: "110057275341",
  appId: "1:110057275341:web:495d166746028a41e64e84",
  measurementId: "G-KREHE7EKSJ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


