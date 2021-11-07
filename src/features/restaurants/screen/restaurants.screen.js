import React, { useContext, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FadeInView } from "../../../components/animations/fade.animation";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourite.context";

import { Search } from "../components/search.component";
import RestaurantItems, {
  localRestaurants,
  RestaurantInfoCard,
} from "../components/restaurant-info.Card.component";

import { RestaurantList } from "../../settings/components/restaurant-list.styles";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 320%;
  left: 50%;
`;

export const ProductScreen = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <View>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue400} />
        </LoadingContainer>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};
