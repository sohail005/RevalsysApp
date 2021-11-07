import { useFocusEffect } from "@react-navigation/core";
import React, { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../../restaurants/components/search.component";

import { MapCallout } from "../screens/components/map-callout.component";

/* const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`; */
/* const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`; */

export const HomeScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  /*  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0); */

  /* const { lat, lng, viewport } = location; */

  /* useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);
 */
  useFocusEffect(React.useCallback(() => {}, [user]));

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Welcome</Text>
      <Spacer position="top" size="large">
        <Text variant="label" style={{ fontSize: 30, color: "green" }}>
          {user.email}
        </Text>
        <Text style={{ fontSize: 40 }}>To The React Native</Text>
      </Spacer>
      {/* <SettingsItem title="Logout" onPress={onLogout} /> */}
      {/* <Search /> */}
      {/* <Map
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
        >
          {restaurants.map((restaurant) => {
             return (
                
              );
          })}
        </Map> */}
    </View>
  );
};
