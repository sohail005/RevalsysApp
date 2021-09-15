
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { SafeArea } from "../../../utility/safe-area.component";
import {RestaurantInfoCard} from "../components/restaurant-info.Card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesBar } from "../../../services/favourites/favourites-bar.component";
import { Search } from "../components/search.component";

import { FavouritesContext } from "../../../services/favourites/favourite.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -16%;
  margin-top: 50%;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 300px;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={60} animating={true} color={Colors.blueGrey500} />
        </LoadingContainer>
      )}
       <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};