import { useFocusEffect } from "@react-navigation/core";
import React, { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Spacer } from "../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const HomeScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  useFocusEffect(React.useCallback(() => {}, [user]));

  return (
    <View style={{ justifyContent: "center", alignItems: "center" ,alignSelf:'center'}}>
      <Text style={{ fontSize: 40 }}>Welcome</Text>
      <Spacer position="top" size="large">
        <Text variant="label" style={{ fontSize: 30, color: "green" ,alignSelf:'center',justifyContent:"center"}}>
          {user.email}
        </Text>
        <Text style={{ fontSize: 40 }}>To React Native</Text>
      </Spacer>
     
    </View>
  );
};
