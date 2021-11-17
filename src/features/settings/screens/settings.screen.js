import React, { useContext, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "../../../../src/components/typography/text.component";
import { Button, TextInput } from "react-native-paper";
import { Popover } from "@material-ui/core";
import Textinput from "./textinput";

export const FeedbackScreen = ({ navigation }) => {
 
 

  return (
    <View>
     

<Textinput/>
   
    </View>
  );
};
