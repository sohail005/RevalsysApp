import React, { useContext, useState } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import ProductItemsList, {
  localRestaurants,
} from "../components/Products-inf0-card";
import { ProductsContext } from "../../../services/restaurants/products.context";

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
  const { isLoading, restaurants } = useContext(ProductsContext);
  

  return (
    <View>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue400} />
        </LoadingContainer>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductItemsList
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};
