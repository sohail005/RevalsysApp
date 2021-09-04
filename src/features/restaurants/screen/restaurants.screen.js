import React from "react";
import {StatusBar,StyleSheet, Text, View, SafeAreaView,Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info.Card.component';
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
flex: 1;
 ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;
const SerchContainer = styled(SafeAreaView)`
padding: 16px;
 backgroundColor:lightgray;
`;
const RestaurantListContainer = styled(SafeAreaView)`
flex: 1;
 padding: 16px;
  backgroundColor:lightgray;
`;

export const RestaurantsScreen =()=>(
    <SafeArea >
    <SerchContainer >
      <Searchbar />
    </SerchContainer> 
    <RestaurantListContainer >
      <RestaurantInfoCard />
    </RestaurantListContainer>
    </SafeArea>
);


  
   
  