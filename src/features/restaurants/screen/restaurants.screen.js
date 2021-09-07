import React, { useContext }  from "react";
import {FlatList, SafeAreaView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info.Card.component';
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import {SafeArea} from "../../../utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
const RestaurantListContainer = styled(SafeAreaView)`
 padding: 16px;
  backgroundColor:lightgray;
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`margin-bottom: ${(props) => props.theme.space[2]};
backgroundColor:lightgray`;


export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};


  
   
  