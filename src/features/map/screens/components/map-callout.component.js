import React from "react";
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../../../../components/restourant/compact-restaurant-info.component";
export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);