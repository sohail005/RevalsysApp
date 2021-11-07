import React from "react";
import { View, Text, Image } from "react-native";

export default function About(props) {
  const {
    ProductTitle,
    ListImagePath,
    Price,
    ViewCount,
    StyleName,
    AvailableSizes,
    Images,
    Collection,
    ColorsCount,
    MRP,
  } = props.route.params;
  return (
    <View>
      <RestaurantImage ListImagePath={ListImagePath} />
      <RestaurantName
        ProductTitle={ProductTitle}
        Collection={Collection}
        ColorsCount={ColorsCount}
        MRP={MRP}
      />
      {/* <ProductDetails ViewCount={ViewCount} /> */}
      <ProductDetails
        Price={Price}
        StyleName={StyleName}
        AvailableSizes={AvailableSizes}
        Images={Images}
        ViewCount={ViewCount}
      />

      {/*  <RestaurantDescription  description={description} /> */}
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image
    source={{ uri: props.ListImagePath }}
    style={{ width: "90%", height: 180, alignSelf: "center" }}
  />
);

const RestaurantName = (props) => (
  <View style={{ marginLeft: 20 }}>
    <Text
      style={{
        fontSize: 30,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.ProductTitle}
    </Text>
    <Text style={{ color: "gray" }}>{props.Collection}</Text>
    <Text style={{ color: "gray" }}>Colors: {props.ColorsCount}</Text>
  </View>
);
/* const ProductDetails = (props) => (
  
); */

const ProductDetails = (props) => (
  <View
    style={{
      flexDirection: "column",
      justifyContent: "flex-start",
      marginLeft: 20,
    }}
  >
    <Text
      style={{
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 18.5,
        color: "black",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 15.5,
          color: "black",
        }}
      >
        Price:
      </Text>{" "}
      ₹{props.Price}
    </Text>
    <View>
      <Text style={{ color: "gray", fontSize: 20 }}>
        Reviews : {props.ViewCount}
      </Text>
      <Text style={{ color: "gray", fontSize: 20 }}>
        Style : {props.StyleName}
      </Text>
      <Text style={{ color: "gray", fontSize: 20 }}>
        Size : {props.AvailableSizes}
      </Text>
      <Image
        source={{ uri: props.Images }}
        style={{ width: 40, height: 40, alignSelf: "center" }}
      />
    </View>
  </View>
);
