import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`

  ${StatusBar.currentHeight && `margin-bottom: ${StatusBar.currentHeight}px`};
`;