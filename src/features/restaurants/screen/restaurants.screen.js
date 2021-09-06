import * as React from "react";
import {FlatList, SafeAreaView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info.Card.component';
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import {SafeArea} from "../../../utility/safe-area.component";


const SerchContainer = styled(SafeAreaView)`
padding: 10px;
 backgroundColor:lightgray;
`;
const RestaurantListContainer = styled(SafeAreaView)`
 padding: 16px;
  backgroundColor:lightgray;
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})`margin-bottom: ${(props) => props.theme.space[2]};
backgroundColor:lightgray`;


export const RestaurantsScreen =()=>(
    <SafeArea >
    <SerchContainer >
      <Searchbar  placeholder="Search"/>
    </SerchContainer> 
    <RestaurantList 
    data={[
      {name:1}, 
      {name:2},
       {name:3},
        {name:4},
        {name:5},
        {name:6},
         {name:7},
         {name:8},
       {name:9},
        {name:10},
        {name:11},
        {name:12},
         {name:13},
    ]}
    renderItem={() => (
      <Spacer position="bottom" size="large">
        <RestaurantInfoCard />
      </Spacer>
    )}
    keyExtractor={(item)=>item.name}
    //contentContainerStyle={{padding: 16, marginTop:5}}
    />
    
    </SafeArea>
);


  
   
  